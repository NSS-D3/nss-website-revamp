export const TEAM_POSITIONS = {
  PRESIDENT: "President",
  VICE_PRESIDENT: "Vice President", 
  SECRETARY: "Secretary",
  EDUCATION_COORDINATOR: "Education Coordinator",
  HEALTH_COORDINATOR: "Health Coordinator",
  ENVIRONMENT_COORDINATOR: "Environment Coordinator",
  SOCIAL_COORDINATOR: "Social Coordinator"
} as const;

export const CONTACT_SUBJECTS = [
  "Volunteer Inquiry",
  "Event Information", 
  "Partnership Opportunity",
  "General Question",
  "Other"
] as const;

export const ACTIVITIES = [
  {
    title: "School",
    description: "Teaching and mentoring underprivileged children in local schools and communities.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-book",
    color: "bg-bits-blue",
    stats: "50+ Students Impacted"
  },
  {
    title: "Health Public Awareness",
    description: "Organizing medical checkups, health awareness, and wellness programs.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-stethoscope", 
    color: "bg-community-green",
    stats: "200+ People Served"
  },
  {
    title: "Parisodh",
    description: "Environmental cleanup drives and tree plantation campaigns.",
    image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-seedling",
    color: "bg-creative-purple", 
    stats: "100+ Trees Planted"
  },
  {
    title: "Department of Sponsorship and Collaboration",
    description: "Disaster relief and emergency support for affected communities.",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-hand-holding-heart",
    color: "bg-energy-amber",
    stats: "Emergency Response"
  },
  {
    title: "Computer Literacy Programme",
    description: "Teaching basic computer skills and digital awareness to communities.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-laptop",
    color: "bg-action-red",
    stats: "Tech Training"
  },
  {
    title: "Umang",
    description: "Collecting and distributing clothes, books, and essential supplies.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-gift",
    color: "bg-bits-blue",
    stats: "Monthly Drives"
  },
  {
    title: "Department of Design and Development",
    description: "Creating visual content, designs, and technical solutions for NSS initiatives.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-palette",
    color: "bg-purple-600",
    stats: "Creative Solutions"
  }
];

export const IMPACT_STATS = [
  {
    value: "500+",
    label: "Active Volunteers",
    color: "text-bits-blue"
  },
  {
    value: "10,000+", 
    label: "Lives Impacted",
    color: "text-community-green"
  },
  {
    value: "50+",
    label: "Projects Completed", 
    color: "text-creative-purple"
  },
  {
    value: "25,000+",
    label: "Service Hours",
    color: "text-energy-amber"
  }
];

export const OBJECTIVES = [
  {
    title: "Education & Awareness",
    description: "Promoting literacy, education, and awareness programs in rural and urban communities.",
    icon: "fas fa-graduation-cap",
    color: "bg-bits-blue"
  },
  {
    title: "Health & Hygiene", 
    description: "Conducting health camps, hygiene awareness, and medical assistance programs.",
    icon: "fas fa-heart",
    color: "bg-community-green"
  },
  {
    title: "Environment",
    description: "Environmental conservation, tree plantation, and sustainable development initiatives.",
    icon: "fas fa-leaf",
    color: "bg-creative-purple"
  }
];
