import { motion } from "framer-motion";
import { OBJECTIVES } from "../lib/constants";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 scroll-mt-20"
      style={{ backgroundColor: "#fed7aa" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black mb-4">
            About NSS BITS Pilani
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg font-arial text-[#2b2b2b] max-w-3xl mx-auto px-4">
            The National Service Scheme at BITS Pilani is dedicated to
            developing social consciousness and community service spirit among
            students through meaningful engagement with society.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students participating in tree planting environmental initiative"
              className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              To develop among students a sense of social and civic
              responsibility, and to utilize their knowledge in finding
              practical solutions to individual and community problems.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Understand the community in which they work",
                "Understand themselves in relation to their community",
                "Identify the needs and problems of the community",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-community-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Objectives Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {OBJECTIVES.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 card-hover h-full">
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${objective.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <i
                      className={`${objective.icon} text-white text-xl sm:text-2xl`}
                    ></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {objective.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
