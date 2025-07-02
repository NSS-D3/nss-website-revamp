import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { Newsletter } from "../../shared/schema";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const NEWSLETTER_CATEGORIES = [
  { id: "all", label: "All", color: "bg-gray-500" },
  { id: "general", label: "General News", color: "bg-bits-blue" },
  { id: "events", label: "Events", color: "bg-community-green" },
  { id: "activities", label: "Departments", color: "bg-creative-purple" },
  { id: "achievements", label: "Achievements", color: "bg-energy-amber" },
];

export function FreeNewsletterSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<Newsletter | null>(null);

  const { data: newsletters = [], isLoading } = useQuery<Newsletter[]>({
    queryKey: [
      "/api/newsletters",
      selectedCategory === "all" ? undefined : selectedCategory,
    ],
    queryFn: async () => {
      const url =
        selectedCategory === "all"
          ? "/api/newsletters"
          : `/api/newsletters?category=${selectedCategory}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch newsletters");
      return response.json();
    },
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "events":
        return "fas fa-calendar-alt";
      case "activities":
        return "fas fa-hands-helping";
      case "achievements":
        return "fas fa-trophy";
      case "general":
        return "fas fa-newspaper";
      default:
        return "fas fa-file-alt";
    }
  };

  const getCategoryColor = (category: string) => {
    const categoryObj = NEWSLETTER_CATEGORIES.find(
      (cat) => cat.id === category
    );
    return categoryObj?.color || "bg-gray-500";
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown-like rendering for basic formatting
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold mb-4 text-gray-900">
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-xl font-semibold mb-3 text-gray-800 mt-6"
          >
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 mb-1 text-gray-700">
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-3 text-gray-700 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free Newsletter Archive
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest community service stories, impact
            reports, and upcoming events. Read our newsletters for free - no
            subscription required.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {NEWSLETTER_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? `${category.color} text-white hover:opacity-90`
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Newsletter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={newsletter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover h-full">
                {newsletter.featuredImage && (
                  <div className="relative">
                    <img
                      src={newsletter.featuredImage}
                      alt={newsletter.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${getCategoryColor(
                          newsletter.category
                        )} text-white`}
                      >
                        <i
                          className={`${getCategoryIcon(
                            newsletter.category
                          )} mr-1 text-xs`}
                        ></i>
                        {newsletter.category.charAt(0).toUpperCase() +
                          newsletter.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="fas fa-calendar mr-2"></i>
                    {formatDate(newsletter.publishedAt || newsletter.createdAt)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {newsletter.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsletter.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setSelectedNewsletter(newsletter)}
                      >
                        <i className="fas fa-book-open mr-2"></i>
                        Read Full Newsletter
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          {newsletter.title}
                        </DialogTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <i className="fas fa-calendar mr-2"></i>
                            {formatDate(
                              newsletter.publishedAt || newsletter.createdAt
                            )}
                          </div>
                          <Badge
                            className={`${getCategoryColor(
                              newsletter.category
                            )} text-white`}
                          >
                            {newsletter.category.charAt(0).toUpperCase() +
                              newsletter.category.slice(1)}
                          </Badge>
                        </div>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] pr-4">
                        {newsletter.featuredImage && (
                          <img
                            src={newsletter.featuredImage}
                            alt={newsletter.title}
                            className="w-full h-64 object-cover rounded-lg mb-6"
                          />
                        )}
                        <div className="prose prose-lg max-w-none">
                          {renderMarkdownContent(newsletter.content)}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {newsletters.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-newspaper text-gray-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Newsletters Found
            </h3>
            <p className="text-gray-600">
              {selectedCategory === "all"
                ? "No newsletters have been published yet."
                : `No newsletters found in the ${selectedCategory} category.`}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Stay Updated?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates
                directly in your inbox. Be the first to know about new events,
                activities, and community impact stories.
              </p>
              <Button
                onClick={() => {
                  const newsletterSection =
                    document.querySelector("#newsletter-signup");
                  if (newsletterSection) {
                    newsletterSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="gradient-bg text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
