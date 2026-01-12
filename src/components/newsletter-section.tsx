import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "../hooks/use-toast";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const newsletters = [
        {
            title: "CCC Success Story",
            date: "January 2025",
            file: "/newsletters/CCC_Success_Story.pdf",
            description: "Read about a student under the Course on Computer Concepts (CCC) initiative of the Computer Literacy Program of NSS, BITS Pilani, cleared the CCC Exam conducted by NIELIT (under MeitY, Government of India) in June 2025. "
        },
        {
            title: "JUNOON 2025",
            date: "February 2025",
            file: "/newsletters/JUNOON_2025.pdf",
            description: "Relive the moments and impact of our flagship sports event for specially-abled children."
        },
        {
            title: "JEE Success Story",
            date: "March 2025",
            file: "/newsletters/Megha.pdf",
            description: "The Joint Entrance Examination (JEE Main) is one of the toughest and most prestigious national-level exam in India, serving as the gateway to leading institutions such as the National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and many other centrally funded technical institutes."
        },
    ];

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast({
            title: "Successfully Subscribed!",
            description: "Thank you for subscribing to our newsletter. You will receive updates soon.",
        });

        setEmail("");
        setIsSubmitting(false);
    };

    return (
        <section id="newsletter" className="py-20 sm:py-28 bg-[#fdfdfd] relative overflow-hidden scroll-mt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#0d5756] tracking-tight mb-6">
                        Our Newsletter
                    </h2>
                    <div className="w-24 h-1.5 gradient-bg mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Stay connected with our mission. Discover stories of change, upcoming events, and ways you can make an impact.
                    </p>
                </div>

                {/* Subscription Card */}
                <div className="relative mb-24 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <Card className="relative overflow-hidden border-0 shadow-2xl bg-[#0d5756] rounded-[2rem]">
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-5 items-stretch">
                                <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 text-white relative flex flex-col justify-center">
                                    <div className="relative z-10">
                                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-teal-200 border border-white/10">
                                            Stay Informed
                                        </span>
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                            Join the <span className="text-teal-300">NSS Community</span> today.
                                        </h3>
                                        <p className="text-lg text-teal-50/80 mb-8 max-w-xl leading-relaxed">
                                            Get monthly updates, event invitations, and inspirational stories delivered straight to your inbox.
                                        </p>
                                        <div className="flex flex-wrap gap-6">
                                            <div className="flex items-center space-x-3 group/item">
                                                <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 group-hover/item:scale-110 transition-transform">
                                                    <i className="fas fa-check text-xs"></i>
                                                </div>
                                                <span className="text-sm font-medium text-teal-50">Impact Updates</span>
                                            </div>
                                            <div className="flex items-center space-x-3 group/item">
                                                <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 group-hover/item:scale-110 transition-transform">
                                                    <i className="fas fa-check text-xs"></i>
                                                </div>
                                                <span className="text-sm font-medium text-teal-50">Volunteer Openings</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Decorative blobs inside card */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
                                </div>

                                <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-l border-white/10">
                                    <form onSubmit={handleSubscribe} className="space-y-4 relative z-10">
                                        <div>
                                            <Input
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="bg-white/20 border-white/30 text-white placeholder:text-teal-100/40 h-14 rounded-xl focus:ring-teal-400 focus:border-teal-400 focus:bg-white/25 transition-all text-lg"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-white text-[#0d5756] hover:bg-teal-50 h-14 rounded-xl font-black text-lg transition-all duration-300 shadow-xl shadow-teal-900/20 hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center">
                                                    <i className="fas fa-circle-notch fa-spin mr-3"></i>
                                                    Processing...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    Subscribe Now
                                                    <i className="fas fa-paper-plane ml-3 text-sm"></i>
                                                </div>
                                            )}
                                        </Button>
                                        <p className="text-[10px] text-teal-100/40 mt-6 text-center leading-relaxed">
                                            By clicking subscribe, you agree to our privacy policy and consent to receive periodic emails from NSS BITS Pilani.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Editions Section */}
                <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Recent Editions</h3>
                            <p className="text-gray-500 mt-2">Browse the archives of our past newsletters.</p>
                        </div>
                        <Button variant="ghost" className="text-[#0d5756] hover:bg-teal-50 font-bold group">
                            View All Archive
                            <i className="fas fa-external-link-alt ml-2 text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsletters.map((newsletter, index) => (
                            <div key={index} className="group h-full">
                                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-2 flex flex-col">
                                    <div className="relative h-48 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center overflow-hidden border-b border-gray-50">
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-700"></div>
                                        <div className="relative z-10 w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center text-red-500 transform group-hover:rotate-6 transition-all duration-500">
                                            <i className="fas fa-file-pdf text-4xl"></i>
                                        </div>
                                        <div className="absolute top-4 right-4">

                                        </div>
                                    </div>
                                    <CardContent className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center text-teal-600 text-xs font-bold uppercase tracking-wider mb-3">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {newsletter.date}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d5756] transition-colors">
                                            {newsletter.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                                            {newsletter.description}
                                        </p>
                                        <Button
                                            className="w-full bg-gray-50 text-gray-700 hover:bg-[#0d5756] hover:text-white border-none shadow-none font-bold rounded-xl transition-all duration-300 py-6"
                                            asChild
                                        >
                                            <a href={newsletter.file} target="_blank" rel="noopener noreferrer">
                                                Read Newsletter
                                                <i className="fas fa-chevron-right ml-2 text-xs"></i>
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
