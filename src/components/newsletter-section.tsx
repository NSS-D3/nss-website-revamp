import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { insertNewsletterSubscriberSchema } from "../../shared/schema";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type NewsletterFormData = z.infer<typeof insertNewsletterSubscriberSchema>;

const NEWSLETTER_PREFERENCES = [
  {
    id: "events",
    label: "Upcoming Events & Activities",
    description: "Get notified about NSS events and community activities",
  },
  {
    id: "activities",
    label: "Program Updates",
    description: "Stay updated on our ongoing projects and initiatives",
  },
  {
    id: "general",
    label: "General News",
    description: "NSS achievements, announcements, and success stories",
  },
];

export function NewsletterSection() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: "",
    firstName: "",
    lastName: "",
    preferences: ["general"],
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const subscriptionMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      const response = await apiRequest(
        "POST",
        "/api/newsletter/subscribe",
        data
      );
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Successfully Subscribed!",
          description:
            "Thank you for subscribing to our newsletter. You'll receive updates about our community service activities.",
        });
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          preferences: ["general"],
        });
        queryClient.invalidateQueries({
          queryKey: ["/api/newsletter/subscribers"],
        });
      } else {
        toast({
          title: "Subscription Failed",
          description: data.message || "Unable to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.preferences || formData.preferences.length === 0) {
      toast({
        title: "Preferences Required",
        description: "Please select at least one newsletter preference.",
        variant: "destructive",
      });
      return;
    }

    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(formData);
      subscriptionMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields correctly.",
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (field: keyof NewsletterFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (preferenceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      preferences: checked
        ? [...(prev.preferences || []), preferenceId]
        : (prev.preferences || []).filter((id) => id !== preferenceId),
    }));
  };

  return (
    <section
      id="newsletter-signup"
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <div className="gradient-bg p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Stay Connected with NSS
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about
                upcoming events, volunteer opportunities, and the impact we're
                making together.
              </p>
            </div>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName || ""}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Your first name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName || ""}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Your last name"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Newsletter Preferences *
                  </Label>
                  <div className="space-y-4">
                    {NEWSLETTER_PREFERENCES.map((preference) => (
                      <div
                        key={preference.id}
                        className="flex items-start space-x-3"
                      >
                        <Checkbox
                          id={preference.id}
                          checked={(formData.preferences || []).includes(
                            preference.id
                          )}
                          onCheckedChange={(checked) =>
                            handlePreferenceChange(
                              preference.id,
                              checked as boolean
                            )
                          }
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={preference.id}
                            className="font-medium text-gray-900 cursor-pointer"
                          >
                            {preference.label}
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            {preference.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-shield-alt text-community-green mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Privacy Promise:</strong> We respect your
                        privacy and will never share your email address. You can
                        unsubscribe at any time with one click.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-bg text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  disabled={subscriptionMutation.isPending}
                  size="lg"
                >
                  {subscriptionMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Subscribe to Newsletter
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
