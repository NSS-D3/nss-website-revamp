import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Professor, TeamMember } from "../../shared/schema";
import { TEAM_POSITIONS } from "../lib/constants";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function TeamSection() {
  const { data: teamMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const { data: professors = [], isLoading: professorsLoading } = useQuery<
    Professor[]
  >({
    queryKey: ["/api/professors"],
  });

  if (isLoading || professorsLoading) {
    return (
      <section
        id="team"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const leadershipTeam = teamMembers.filter((member) =>
    [
      TEAM_POSITIONS.PRESIDENT,
      TEAM_POSITIONS.VICE_PRESIDENT,
      TEAM_POSITIONS.SECRETARY,
    ].includes(member.position as any)
  );

  const coordinators = teamMembers.filter((member) =>
    member.position.includes("Coordinator")
  );

  const facultyIncharge = professors.filter(
    (prof) => prof.role === "faculty_incharge"
  );
  const programmeOfficers = professors.filter(
    (prof) => prof.role === "programme_officer"
  );

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team members who lead our community service
            initiatives and drive positive change.
          </p>
        </div>

        {/* Professors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Professors
          </h3>

          {/* Faculty In-charge */}
          {facultyIncharge.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">
                Faculty In-charge
              </h4>
              <div className="flex justify-center">
                {facultyIncharge.map((faculty, index) => (
                  <motion.div
                    key={faculty.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-sm"
                  >
                    <Card className="card-hover">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-bits-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-user-tie text-bits-blue text-xl"></i>
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">
                          {faculty.name}
                        </h5>
                        <p className="text-sm text-bits-blue font-medium mb-2">
                          Faculty In-charge
                        </p>
                        <p className="text-xs text-gray-600">
                          {faculty.department}
                        </p>
                        {faculty.email && (
                          <Button variant="ghost" size="sm" className="mt-2">
                            <i className="fas fa-envelope mr-2"></i>
                            Contact
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Programme Officers */}
          {programmeOfficers.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">
                Programme Officers
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programmeOfficers.map((officer, index) => (
                  <motion.div
                    key={officer.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-community-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-chalkboard-teacher text-community-green text-lg"></i>
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">
                          {officer.name}
                        </h5>
                        <p className="text-sm text-community-green font-medium mb-2">
                          Programme Officer
                        </p>
                        <p className="text-xs text-gray-600">
                          {officer.department}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Office Bearers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Office Bearers
          </h3>

          {leadershipTeam.length > 0 && (
            <div className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {leadershipTeam.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden card-hover">
                      {member.imageUrl && (
                        <img
                          src={member.imageUrl}
                          alt={`Professional headshot of ${member.name}`}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-community-green font-medium mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {member.description}
                        </p>
                        <div className="flex space-x-3">
                          {member.linkedinUrl && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <i className="fab fa-linkedin text-gray-400 hover:text-bits-blue"></i>
                            </Button>
                          )}
                          {member.emailUrl && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <i className="fas fa-envelope text-gray-400 hover:text-bits-blue"></i>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Department Coordinators */}
          {coordinators.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">
                Department Coordinators
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coordinators.map((coordinator, index) => (
                  <motion.div
                    key={coordinator.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-user-cog text-white text-xl"></i>
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                          {coordinator.name}
                        </h5>
                        <p className="text-sm text-blue-600 font-medium mb-3">
                          {coordinator.position}
                        </p>
                        {coordinator.description && (
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {coordinator.description}
                          </p>
                        )}
                        <div className="flex justify-center space-x-2 mt-4">
                          {coordinator.linkedinUrl && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <i className="fab fa-linkedin text-gray-400 hover:text-bits-blue text-sm"></i>
                            </Button>
                          )}
                          {coordinator.emailUrl && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                            >
                              <i className="fas fa-envelope text-gray-400 hover:text-bits-blue text-sm"></i>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
