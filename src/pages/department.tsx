import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { departments } from "../lib/departments";

export function DepartmentPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const getDepartmentBySlug = (slug: string) => {
    return departments.find(dept => 
      dept.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
    );
  };

  const department = getDepartmentBySlug(slug!);

  // Save scroll position before navigating back
  const handleBackToHome = () => {
    // Don't save scroll position, just navigate
    navigate("/");
  };

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-8">The department you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="py-20" style={{ backgroundColor: '#fed7aa' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${department.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                <i className={`${department.icon} text-white text-4xl`}></i>
              </div>
              <h1 className="text-5xl font-bold text-black mb-4">
                {department.name}
              </h1>
              <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
              <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                {department.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p 
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {department.details.mission}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt={`${department.name} activities - Image 1`}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt={`${department.name} activities - Image 2`}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Activities</h2>
              <div className="space-y-6">
                {department.details.activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${department.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <i className="fas fa-check-circle text-white text-lg"></i>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {activity.title}
                            </h3>
                            <p 
                              className="text-gray-700 leading-relaxed"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {activity.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Back to Departments Button */}
            <div className="text-center">
              <Button 
                onClick={() => navigate("/")}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3"
                size="lg"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
