import { motion } from "framer-motion";
import { useState } from "react";
import { Event } from "../../shared/schema";
import { events } from "../lib/events.ts";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (date: string | Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getEventIcon = (title: string) => {
    if (title.toLowerCase().includes("health")) return "fas fa-stethoscope";
    if (
      title.toLowerCase().includes("tree") ||
      title.toLowerCase().includes("environment")
    )
      return "fas fa-seedling";
    if (
      title.toLowerCase().includes("training") ||
      title.toLowerCase().includes("volunteer")
    )
      return "fas fa-graduation-cap";
    if (title.toLowerCase().includes("blood")) return "fas fa-heart";
    if (
      title.toLowerCase().includes("festival") ||
      title.toLowerCase().includes("community")
    )
      return "fas fa-hands-helping";
    if (title.toLowerCase().includes("junoon")) return "fas fa-music";
    if (
      title.toLowerCase().includes("shop") ||
      title.toLowerCase().includes("smile")
    )
      return "fas fa-store";
    if (title.toLowerCase().includes("conferencia")) return "fas fa-users";
    return "fas fa-calendar";
  };

  const getEventColor = (title: string) => {
    if (title.toLowerCase().includes("health")) return "bg-community-green";
    if (
      title.toLowerCase().includes("tree") ||
      title.toLowerCase().includes("environment")
    )
      return "bg-creative-purple";
    if (
      title.toLowerCase().includes("training") ||
      title.toLowerCase().includes("volunteer")
    )
      return "bg-energy-amber";
    if (title.toLowerCase().includes("blood")) return "bg-action-red";
    if (title.toLowerCase().includes("junoon"))
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    if (
      title.toLowerCase().includes("shop") ||
      title.toLowerCase().includes("smile")
    )
      return "bg-gradient-to-r from-green-500 to-blue-500";
    if (title.toLowerCase().includes("conferencia"))
      return "bg-gradient-to-r from-blue-500 to-indigo-500";
    return "bg-bits-blue";
  };

  const renderEventContent = (content: string | null) => {
    if (!content) return null;

    // Simple markdown-like rendering
    const lines = content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold mb-4 text-gray-900">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-xl font-semibold mb-3 text-gray-800 mt-6"
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-lg font-medium mb-2 text-gray-700 mt-4"
          >
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith("- **") && line.includes("**:")) {
        const parts = line.split("**:");
        const boldPart = parts[0].substring(3);
        const restPart = parts[1];
        return (
          <li key={index} className="mb-2">
            <strong>{boldPart}:</strong>
            {restPart}
          </li>
        );
      } else if (line.startsWith("- ")) {
        return (
          <li key={index} className="mb-1 text-gray-600">
            {line.substring(2)}
          </li>
        );
      } else if (line.trim() === "") {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="mb-3 text-gray-600 leading-relaxed">
            {line}
          </p>
        );
      }
    });
  };

  // if (isLoading) {
  //   return (
  //     <section id="events" className="py-20 bg-white">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="text-center">
  //           <div className="animate-pulse space-y-4">
  //             <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
  //             <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  const featuredEvent = events[0];
  const otherEvents = events.slice(1, 5);

  return (
    <section
      id="events"
      className="py-20 bg-[#ffc3c0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Events</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and community
            service opportunities.
          </p>
        </div>

        {/* All Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() =>
                window.location.href = `/${event.title.toLowerCase().replace(/\s+/g, '-')}`
              }
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="card-hover cursor-pointer group h-full overflow-hidden">
                    <div className="relative">
                      {event.imageUrl && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                          {event.category
                            ? event.category.charAt(0).toUpperCase() +
                              event.category.slice(1)
                            : "Event"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          >
                          <i
                            className={`${getEventIcon(
                              event.title
                            )} text-black`}
                          ></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                           
                            <div className="flex items-center">
                              <i className="fas fa-map-marker-alt mr-2"></i>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
               {/* <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      {event.title}
                    </DialogTitle>
                    <DialogDescription>{event.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    {event.imageUrl && (
                      <div className="w-full h-64 overflow-hidden rounded-lg">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-calendar mr-2 text-blue-600"></i>
                        <span>
                          {formatDate(event.date)} at {formatTime(event.date)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      {renderEventContent(event.content)}
                    </div>
                    {/* <div className="flex gap-4 pt-4 border-t">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Register Now
                      </Button>
                      <Button variant="outline">Share Event</Button>
                    </div> 
                  </div>
                </DialogContent>*/}
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
