import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const { toast } = useToast();

  const unsubscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/unsubscribe", {
        email,
      });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setIsUnsubscribed(true);
        toast({
          title: "Successfully Unsubscribed",
          description:
            data.message || "You have been unsubscribed from our newsletter.",
        });
      } else {
        toast({
          title: "Unsubscribe Failed",
          description:
            data.message || "Unable to unsubscribe. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to unsubscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    unsubscribeMutation.mutate(email);
  };

  if (isUnsubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-green-600 text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Successfully Unsubscribed
                </h2>
                <p className="text-gray-600 mb-6">
                  You have been unsubscribed from our newsletter. We're sorry to
                  see you go!
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  If you change your mind, you can always subscribe again from
                  our website.
                </p>
                <Link to={"/"}>
                  <Button className="gradient-bg text-white">
                    <i className="fas fa-home mr-2"></i>
                    Return to Home
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope-open text-red-600 text-2xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Unsubscribe from Newsletter
                </h1>
                <p className="text-gray-600">
                  We're sorry to see you go. Enter your email address to
                  unsubscribe from our newsletter.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  disabled={unsubscribeMutation.isPending}
                >
                  {unsubscribeMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Unsubscribing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-unlink mr-2"></i>
                      Unsubscribe
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <Link to="/">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
