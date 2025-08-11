import { IMPACT_STATS } from "../lib/constants";
import { departments } from "../lib/departments";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="py-20 bg-[#0d5752]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-serif mb-4">Departments</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl  text-white max-w-3xl mx-auto">
            Discover our specialized departments and their dedicated work in
            community service across various domains.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dept, index) => (
            <div
              key={dept.name}
              onClick={() => {
                window.location.href = `/${dept.id}`;
              }}
            >
              <Card className="card-hover  bg-gradient-to-br from-[#0d5752]/80 to-[#0d5752]/90 backdrop-blur-lg border border-[#0d5752]/20 rounded-xl flex flex-col cursor-pointer group h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${dept.icon} text-white text-3xl`}></i>
                  </div>
                  <h4 className="text-lg font-semibold font-serif text-white mb-2 group-hover:text-gray-400 transition-colors">
                    {dept.name}
                  </h4>
                  <p
                    className="text-sm text-gray-300 line-clamp-3"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {dept.description}
                  </p>
                 
                </CardContent>
              </Card>
            </div>

          )
          )}
          

        </div>

        {/* Impact Statistics */}
        <div>
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
        </div>
      </div>
    </section>
  );
}
