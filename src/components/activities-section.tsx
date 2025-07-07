import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { TeamMember } from "../../shared/schema";
import { IMPACT_STATS } from "../lib/constants";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
  const { data: teamMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const coordinators = teamMembers.filter((member) =>
    member.position.includes("Coordinator")
  );

  // Department data with complete details
  const departments = [
    {
      name: "School",
      description:
        "Overseeing literacy and education programs, managing school outreach and student mentorship programs.",
      icon: "fas fa-graduation-cap",
      color: "from-blue-500 to-indigo-500",
      members: coordinators.filter((c) => c.position.includes("School")),
      details: {
        mission:
          "To promote education and literacy in underserved communities through innovative teaching methods and mentorship.",
        activities: [
          "Adult literacy programs in rural areas",
          "School mentorship and tutoring",
          "Educational material distribution",
          "Computer literacy workshops",
          "Scholarship programs for underprivileged students",
        ],
        achievements: [
          "Taught 500+ adults basic literacy skills",
          "Mentored 200+ school children",
          "Distributed educational materials to 50+ schools",
          "Established 5 community learning centers",
        ],
      },
    },
    {
      name: "Health Public Awareness",
      description:
        "Managing health camps and wellness programs, leading health awareness campaigns and medical outreach.",
      icon: "fas fa-stethoscope",
      color: "from-green-500 to-teal-500",
      members: coordinators.filter((c) => c.position.includes("Health")),
      details: {
        mission:
          "To improve community health through awareness campaigns, medical camps, and wellness programs.",
        activities: [
          "Free medical checkup camps",
          "Health awareness workshops",
          "Vaccination drives",
          "Mental health awareness programs",
          "Nutrition and hygiene education",
        ],
        achievements: [
          "Conducted 25+ health camps serving 3000+ people",
          "Organized vaccination drives reaching 1500+ children",
          "Distributed free medicines worth ₹1,50,000",
          "Trained 100+ community health volunteers",
        ],
      },
    },
    {
      name: "Parisodh",
      description:
        "Leading environmental cleanup drives and sustainability projects, coordinating waste management and green initiatives.",
      icon: "fas fa-seedling",
      color: "from-green-600 to-lime-500",
      members: coordinators.filter((c) => c.position.includes("Parisodh")),
      details: {
        mission:
          "To promote environmental conservation and sustainability through community-driven initiatives.",
        activities: [
          "Tree plantation drives",
          "Waste segregation and recycling programs",
          "River and lake cleanup campaigns",
          "Plastic-free awareness initiatives",
          "Sustainable living workshops",
        ],
        achievements: [
          "Planted 2000+ trees across the region",
          "Cleaned 15+ water bodies",
          "Established 10 waste segregation centers",
          "Reduced plastic usage by 30% in partner communities",
        ],
      },
    },
    {
      name: "Department of Sponsorship and Collaboration",
      description:
        "Managing partnerships and sponsorship initiatives, building strategic partnerships and collaboration opportunities.",
      icon: "fas fa-handshake",
      color: "from-indigo-500 to-purple-500",
      members: coordinators.filter((c) => c.position.includes("Sponsorship")),
      details: {
        mission:
          "To build sustainable partnerships and secure resources for NSS initiatives through strategic collaborations.",
        activities: [
          "Corporate partnership development",
          "Grant application and management",
          "Sponsorship for events and programs",
          "Inter-institutional collaborations",
          "Resource mobilization strategies",
        ],
        achievements: [
          "Secured ₹5,00,000+ in sponsorships and grants",
          "Established partnerships with 25+ organizations",
          "Facilitated collaboration with 15+ educational institutions",
          "Organized 10+ joint initiatives with partner organizations",
        ],
      },
    },
    {
      name: "Computer Literacy Programme",
      description:
        "Teaching digital skills and computer literacy to communities, developing digital education programs and training modules.",
      icon: "fas fa-laptop",
      color: "from-cyan-500 to-blue-500",
      members: coordinators.filter((c) => c.position.includes("Computer")),
      details: {
        mission:
          "To bridge the digital divide by providing computer education and digital literacy to underserved communities.",
        activities: [
          "Basic computer training programs",
          "Digital literacy for adults",
          "Online safety and cybersecurity workshops",
          "Government scheme awareness through digital platforms",
          "E-governance assistance programs",
        ],
        achievements: [
          "Trained 800+ individuals in basic computer skills",
          "Established 12 computer learning centers",
          "Conducted 50+ digital literacy workshops",
          "Helped 300+ people access government services online",
        ],
      },
    },
    {
      name: "Umang",
      description:
        "Organizing donation drives and resource distribution, coordinating community welfare and support programs.",
      icon: "fas fa-hands-helping",
      color: "from-orange-500 to-red-500",
      members: coordinators.filter((c) => c.position.includes("Umang")),
      details: {
        mission:
          "To provide essential resources and support to underprivileged communities through organized donation drives.",
        activities: [
          "Clothing and food distribution drives",
          "Emergency relief operations",
          "Educational material donations",
          "Medical equipment distribution",
          "Skill development workshops",
        ],
        achievements: [
          "Distributed food packets to 5000+ families",
          "Collected and donated 10,000+ clothing items",
          "Provided emergency relief to 500+ disaster-affected families",
          "Established 8 community resource centers",
        ],
      },
    },
    {
      name: "Department of Design and Development",
      description:
        "Creating visual content and design solutions for NSS initiatives, developing technical solutions and digital platforms.",
      icon: "fas fa-laptop-code",
      color: "from-pink-500 to-rose-500",
      members: coordinators.filter((c) => c.position.includes("Design")),
      details: {
        mission:
          "To enhance NSS's digital presence and create compelling visual content that amplifies our social impact message.",
        activities: [
          "Website and mobile app development",
          "Social media content creation",
          "Event branding and promotional materials",
          "Digital campaign design",
          "Photography and videography for events",
        ],
        achievements: [
          "Developed and maintained NSS website with 10,000+ monthly visitors",
          "Created visual content for 50+ campaigns",
          "Increased social media engagement by 200%",
          "Designed promotional materials for 30+ events",
        ],
      },
    },
    {
      name: "Events",
      description:
        "Planning and organizing major NSS events and festivals, managing event logistics and coordination activities.",
      icon: "fas fa-calendar-alt",
      color: "from-purple-500 to-pink-500",
      members: coordinators.filter((c) => c.position.includes("Events")),
      details: {
        mission:
          "To create impactful events that raise social awareness and engage the community in meaningful activities.",
        activities: [
          "Annual festivals and cultural events",
          "Awareness campaigns and workshops",
          "Community engagement programs",
          "Inter-college competitions",
          "Fundraising events",
        ],
        achievements: [
          "Organized 50+ successful events with 20,000+ participants",
          "Raised ₹3,00,000+ through fundraising events",
          "Facilitated participation of 100+ colleges in competitions",
          "Created awareness among 15,000+ community members",
        ],
      },
    },
  ];

  if (isLoading) {
    return (
      <section
        id="activities"
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
                      <p className="text-sm text-gray-600 line-clamp-3">
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
                    <DialogDescription>{dept.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Mission
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {dept.details.mission}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Key Activities
                      </h3>
                      <ul className="space-y-2">
                        {dept.details.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <i className="fas fa-check-circle text-green-500 mt-1 flex-shrink-0"></i>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Achievements
                      </h3>
                      <ul className="space-y-2">
                        {dept.details.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <i className="fas fa-trophy text-yellow-500 mt-1 flex-shrink-0"></i>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
