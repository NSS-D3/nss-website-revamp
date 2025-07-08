export type TeamMember = {
  name: string;
  position: string;
  imageUrl?: string;
  linkedinUrl?: string;
  emailUrl?: string;
};

export const teamMembers: TeamMember[] = [
  // Leadership Team
  {
    name: "Parth Pahade",
    position: "President",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Harshit Jhawar",
    position: "Vice President",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Devansh Sureka",
    position: "Secretary",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  // School Department
  {
    name: "Sitaram Prajapat",
    position: "School Coordinator 1",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Shreena Kansagra",
    position: "School Coordinator 2",
  },
  // Health Public Awareness Department
  {
    name: "Bhuvanyu Kumar Sharma",
    position: "Health Public Awareness Coordinator 1",
  },
  {
    name: "Samridhi Agarwal",
    position: "Health Public Awareness Coordinator 2",
  },
  // Parisodh Department
  {
    name: "Isha Gupta",
    position: "Parisodh Coordinator 1",
  },
  {
    name: "Siddharth Bhamidipati",
    position: "Parisodh Coordinator 2",
  },
  // Computer Literacy Programme Department
  {
    name: "Aayush Katakwar",
    position: "Computer Literacy Programme Coordinator 1",
  },
  {
    name: "Mansi Mittal",
    position: "Computer Literacy Programme Coordinator 2",
  },
  // Umang Department
  {
    name: "Shivansh Saxena",
    position: "Umang Coordinator 1",
  },
  {
    name: "Aarushi Tiwari",
    position: "Umang Coordinator 2",
  },
  // Events Department
  {
    name: "Anuj Paliwal",
    position: "Events Coordinator 1",
  },
  {
    name: "Jainam Gandhi",
    position: "Events Coordinator 2",
  },
  // Department of Sponsorship and Collaboration
  {
    name: "Soumya Yadav",
    position: "Sponsorship and Collaboration Coordinator 1",
  },
  // Department of Design and Development
  {
    name: "Atharv Agarwal",
    position: "Design and Development Coordinator 1",
  },
  {
    name: "Medhansh Sharma",
    position: "Design and Development Coordinator 2",
  },
  {
    name: "Dhruv Gupta",
    position: "Design and Development Coordinator 3",
  },
];

export type Professor = {
  name: string;
  position: string;
  email: string;
};

export const professors: Professor[] = [
  {
    name: "Meghana Tare",
    position: "Faculty Incharge",
    email: "meghana.tare@pilani.bits-pilani.ac.in",
  },
  {
    name: "Dr. Prashant Uday Manohar",
    position: "Programme Officer",
    email: "prashant.manohar@pilani.bits-pilani.ac.in",
  },
  {
    name: "Sudeshna M Chowdhury",
    position: "Programme Officer",
    email: "sudeshna.chowdhury@pilani.bits-pilani.ac.in",
  },
  {
    name: "Chandra Shekhar",
    position: "Programme Officer",
    email: "chandra.shekhar@pilani.bits-pilani.ac.in",
  },
  {
    name: "Anirudh Singh Rana",
    position: "Programme Officer",
    email: "anirudh.rana@pilani.bits-pilani.ac.in",
  },
  {
    name: "Nirankush Dutta",
    position: "Programme Officer",
    email: "nirankush.dutta@pilani.bits-pilani.ac.in",
  },
  {
    name: "Sandeep Joshi",
    position: "Programme Officer",
    email: "sandeep.joshi@pilani.bits-pilani.ac.in",
  },
];
