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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team members who lead our community service
            initiinitiatives and drive positive change.
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
                    key={faculty.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-sm"
                  >
                    <Card className="card-hover">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-user-tie text-blue-700 text-xl"></i>
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">
                          {faculty.name}
                        </h5>
                        <p className="text-sm text-blue-700 font-medium mb-2">
                          {faculty.position}
                        </p>
                        {faculty.email && (
                          <a href={`mailto:${faculty.email}`}>
                            <Button variant="ghost" size="sm" className="mt-2">
                              <i className="fas fa-envelope mr-2"></i>
                              {faculty.email}
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
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">
                Programme Officers
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programmeOfficers.map((officer, index) => (
                  <motion.div
                    key={officer.name}
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
                          {officer.position}
                        </p>
                        {officer.email && (
                          <a href={`mailto:${officer.email}`}>
                            <Button variant="ghost" size="sm" className="mt-2">
                              <i className="fas fa-envelope mr-2"></i>
                              {officer.email}
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
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Office Bearers
          </h3>

          {leadershipTeam.length > 0 && (
            <div className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {leadershipTeam.map((member, index) => (
                  <TeamMemberCard
                    key={member.position}
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coordinators.map((coordinator, index) => (
                  <TeamMemberCard
                    key={coordinator.position}
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
