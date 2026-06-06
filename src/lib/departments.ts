export const teamMembers = [
  { id: 1, name: "Sitaram Prajapat", position: "School Coordinator" },
  { id: 2, name: "Shreena Kansagra", position: "School Coordinator" },
  { id: 3, name: "Isha Gupta", position: "Parishodh Coordinator" },
  { id: 4, name: "Siddharth Bhamidipati", position: "Parishodh Coordinator" },
  { id: 5, name: "Aarushi Tiwari", position: "Umang Coordinator" },
  { id: 6, name: "Shivansh Saxena", position: "Umang Coordinator" },
  { id: 7, name: "Aayush Katakwar", position: "Computer Literacy Programme Coordinator" },
  { id: 8, name: "Mansi Mittal", position: "Computer Literacy Programme Coordinator" },
  { id: 9, name: "Samridhi Agrawal", position: "Health and public awareness Coordinator" },
  { id: 10, name: "Bhuvanyu Kumar", position: "Health and public awareness Coordinator" },
  { id: 11, name: "Soumya Yadav", position: "Department of Sponsorship and Collaboration Coordinator" },
  { id: 12, name: "Jainam Gandhi", position: "Events Coordinator" },
  { id: 13, name: "Anuj Paliwal", position: "Events Coordinator" },
  { id: 14, name: "Atharv Agrawal", position: "Department of Design and Development Coordinator" },
  { id: 15, name: "Dhruv Gupta", position: "Department of Design and Development Coordinator" },
  { id: 16, name: "Medhansh Sharma", position: "Department of Design and Development Coordinator" },
];

export const coordinators = teamMembers.filter((member) =>
  member.position.includes("Coordinator")
);

export const departments = [
  {
    name: "Computer Literacy Programme",
    id: "computer-literacy-programme",
    description:
      "Teaching digital skills and computer literacy to communities, developing digital education programs and training modules.",
    icon: "fas fa-laptop",
    color: "from-blue-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    members: coordinators.filter((c) => c.position.includes("Computer")),
    details: { mission: "", activities: [] },
  },
  {
    name: "Department of Design and Development",
    id: "department-of-design-and-development",
    description:
      "Creating visual content and design solutions for NSS initiatives, developing technical solutions and digital platforms.",
    icon: "fas fa-laptop-code",
    color: "from-purple-500 to-purple-700",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    members: coordinators.filter((c) => c.position.includes("Design")),
    details: { mission: "", activities: [] },
  },
  {
    name: "Department of Sponsorship and Collaboration",
    id: "department-of-sponsorship-and-collaboration",
    description:
      "Managing partnerships and sponsorship initiatives, building strategic partnerships and collaboration opportunities.",
    icon: "fas fa-handshake",
    color: "from-green-500 to-green-700",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    members: coordinators.filter((c) => c.position.includes("Sponsorship")),
    details: { mission: "", activities: [] },
  },
  {
    name: "Events",
    id: "events",
    description:
      "Planning and organizing major NSS events and festivals, managing event logistics and coordination activities.",
    icon: "fas fa-calendar-alt",
    color: "from-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    members: coordinators.filter((c) => c.position.includes("Events")),
    details: { mission: "", activities: [] },
  },
 {
  name: "Health and Public Awareness",
  id: "health-public-awareness",
  description:
    "Managing health camps and wellness programs, leading health awareness campaigns and medical outreach.",
  icon: "fas fa-stethoscope",
  color: "from-red-500 to-red-700",
  image:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  members: coordinators.filter((c) => c.position.includes("Health")),
  details: { mission: "", activities: [] },
},

  {
    name: "Parishodh",
    id: "parisodh",
    description:
      "Leading environmental cleanup drives and sustainability projects, coordinating waste management and green initiatives.",
    icon: "fas fa-seedling",
    color: "from-emerald-500 to-emerald-700",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    members: coordinators.filter((c) => c.position.includes("Parishodh")),
    details: { mission: "", activities: [] },
  },
  {
    name: "School",
    id: "school",
    description:
      "Overseeing literacy and education programs, managing school outreach and student mentorship programs.",
    icon: "fas fa-graduation-cap",
    color: "from-indigo-500 to-indigo-700",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    members: coordinators.filter((c) => c.position.includes("School")),
    details: { mission: "", activities: [] },
  },
  {
    name: "Umang",
    id: "umang",
    description: "Organizing support programmes for those in need.",
    icon: "fas fa-hands-helping",
    color: "from-pink-500 to-pink-700",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    members: coordinators.filter((c) => c.position.includes("Umang")),
    details: { mission: "", activities: [] },
  },
];

