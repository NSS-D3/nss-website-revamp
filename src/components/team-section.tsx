import { motion } from "framer-motion";
import { TEAM_POSITIONS } from "../lib/constants";
import { professors, teamMembers } from "../lib/team";
import TeamMemberCard from "./TeamSection/TeamMemberCard";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function TeamSection() {
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
    (prof) => prof.position === "Faculty Incharge"
  );
  const programmeOfficers = professors.filter(
    (prof) => prof.position === "Programme Officer"
  );

  return (
    <section
      id="team"
      className="py-12 sm:py-16 lg:py-20 scroll-mt-20 #bdaeedff bg-[#bdaeedff] from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet the dedicated team members who lead our community service
            initiatives and drive positive change.
          </p>
        </div>

        {/* Professors Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 font-serif mb-6 sm:mb-8">
            Professors
          </h3>

          {/* Faculty In-charge */}
          {facultyIncharge.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h4 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
                Faculty In-charge
              </h4>
              <div className="flex justify-center">
                {facultyIncharge.map((faculty, index) => (
                  <motion.div
                    key={faculty.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm"
                  >
                    <Card className="card-hover">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <i className="fas fa-user-tie text-blue-700 text-lg sm:text-xl"></i>
                        </div>
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                          {faculty.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-blue-700 font-medium mb-2">
                          {faculty.position}
                        </p>
                        {faculty.email && (
                          <a href={`mailto:${faculty.email}`} className="block">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 text-xs sm:text-sm"
                            >
                              <i className="fas fa-envelope mr-2"></i>
                              <span className="hidden sm:inline">
                                {faculty.email}
                              </span>
                              <span className="sm:hidden">Email</span>
                            </Button>
                          </a>
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
            <div className="mb-8 sm:mb-12">
              <h4 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-4 sm:mb-6">
                Programme Officers
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {programmeOfficers.map((officer, index) => (
                  <motion.div
                    key={officer.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover h-full">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-community-green/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <i className="fas fa-chalkboard-teacher text-community-green text-base sm:text-lg"></i>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                          {officer.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-community-green font-medium mb-2">
                          {officer.position}
                        </p>
                        {officer.email && (
                          <a href={`mailto:${officer.email}`} className="block">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 text-xs"
                            >
                              <i className="fas fa-envelope mr-1 sm:mr-2"></i>
                              <span className="hidden lg:inline">
                                {officer.email}
                              </span>
                              <span className="lg:hidden">Contact</span>
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Office Bearers */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 font-serif  mb-6 sm:mb-8">
            Office Bearers
          </h3>

          {leadershipTeam.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {leadershipTeam.map((member, index) => (
                  <TeamMemberCard
                    key={Math.random()}
                    member={member}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Department Coordinators */}
          {coordinators.length > 0 && (
            <div>
              <h4 className="text-lg  font-serif sm:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
                Department Coordinators
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {coordinators.map((coordinator, index) => (
                  <TeamMemberCard
                    key={Math.random()}
                    member={coordinator}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
