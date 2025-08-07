import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IMPACT_STATS } from "../lib/constants";
import { departments } from "../lib/departments";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function ActivitiesSection() {
  const navigate = useNavigate();

  const getDepartmentSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const handleDepartmentClick = (dept: any) => {
    // Save current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    sessionStorage.setItem('homeScrollPosition', scrollPosition.toString());
    
    const slug = getDepartmentSlug(dept.name);
    navigate(`/departments/${slug}`);
  };

  return (
    <section
      id="activities"
      className="py-20 bg-[#0d5752]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Departments</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our specialized departments and their dedicated work in
            community service across various domains.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="card-hover cursor-pointer group h-full"
                onClick={() => handleDepartmentClick(dept)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${dept.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h4>
                  <p
                    className="text-sm text-gray-600 line-clamp-3"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {dept.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <i className="fas fa-arrow-right text-sm"></i>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Impact
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                {IMPACT_STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
