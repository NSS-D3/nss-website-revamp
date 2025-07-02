import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  const handleJoinMission = () => {
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWatchStory = () => {
    // In a real implementation, this would open a video modal or redirect to a video
    alert("Watch Our Story feature would open a video here");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="College students volunteering together at community event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            National Service Scheme
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-yellow-400 font-normal mt-2">
              BITS Pilani
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Not Me, But You" - Empowering students through community service
            and social responsibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleJoinMission}
              className="bg-community-green hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <i className="fas fa-hands-helping mr-2"></i>
              Join Our Mission
            </Button>
            <Button
              onClick={handleWatchStory}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bits-blue font-semibold py-4 px-8 rounded-full transition-all duration-300"
              size="lg"
            >
              <i className="fas fa-play mr-2"></i>
              Watch Our Story
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </motion.div>
    </section>
  );
}
