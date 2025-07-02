import { motion } from "framer-motion";
import { OBJECTIVES } from "../lib/constants";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About NSS BITS Pilani
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The National Service Scheme at BITS Pilani is dedicated to
            developing social consciousness and community service spirit among
            students through meaningful engagement with society.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students participating in tree planting environmental initiative"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To develop among students a sense of social and civic
              responsibility, and to utilize their knowledge in finding
              practical solutions to individual and community problems.
            </p>
            <div className="space-y-4">
              {[
                "Understand the community in which they work",
                "Understand themselves in relation to their community",
                "Identify the needs and problems of the community",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-community-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Objectives Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {OBJECTIVES.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 card-hover h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${objective.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <i className={`${objective.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {objective.title}
                  </h4>
                  <p className="text-gray-700">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
