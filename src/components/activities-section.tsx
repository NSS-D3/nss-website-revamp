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
      className="py-12 sm:py-16 lg:py-20 scroll-mt-20 bg-[#0d5752]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Departments</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Discover our specialized departments and their dedicated work in
            community service across various domains.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
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
                className="card-hover cursor-pointer group h-full transition-all duration-300 hover:shadow-lg"
                onClick={() => handleDepartmentClick(dept)}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${dept.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${dept.icon} text-white text-lg sm:text-xl`}></i>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {dept.name}
                  </h4>
                  <p
                    className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-3 sm:mb-4 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {dept.description}
                  </p>
                  <div className="mt-auto flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                    <span className="text-xs sm:text-sm font-medium mr-2">Learn more</span>
                    <i className="fas fa-arrow-right text-xs sm:text-sm group-hover:translate-x-1 transition-transform"></i>
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
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {IMPACT_STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 font-medium leading-tight">{stat.label}</p>
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
