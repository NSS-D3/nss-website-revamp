import { motion } from "framer-motion";
import { IMPACT_STATS } from "../lib/constants";
import { departments } from "../lib/departments";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Departments</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our specialized departments and their dedicated work in
            community service across various domains.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="card-hover cursor-pointer group h-full">
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
                      <div className="mt-4">
                        <Badge variant="secondary" className="text-xs">
                          {dept.members.length} Coordinator
                          {dept.members.length !== 1 ? "s" : ""}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center`}
                      >
                        <i className={`${dept.icon} text-white text-lg`}></i>
                      </div>
                      {dept.name}
                    </DialogTitle>
                    <DialogDescription style={{ whiteSpace: "pre-line" }}>
                      {dept.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Mission
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {dept.details.mission}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Key Activities
                      </h3>
                      <div className="space-y-4">
                        {dept.details.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <i className="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {activity.title}
                              </h4>
                              <p
                                className="text-gray-600"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {dept.members.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Department Coordinators
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {dept.members.map((member, idx) => (
                            <Card key={member.id} className="p-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-10 h-10 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center`}
                                >
                                  <i className="fas fa-user text-white text-sm"></i>
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-900">
                                    {member.name}
                                  </h5>
                                  <p className="text-sm text-gray-600">
                                    {member.position}
                                  </p>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
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
