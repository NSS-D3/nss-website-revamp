export type TeamMember = {
  name: string;
  position: string;
  imageUrl?: string;
  linkedinUrl?: string;
  emailUrl?: string;
};

export const teamMembers: TeamMember[] = [
  // Office Bearers
  {
    name: "Parth Pahade",
    position: "President",
    imageUrl: "/2023/parth.jpg",
  },
  {
    name: "Harshit Jhawar",
    position: "Vice President",
    imageUrl: "/2023/harshit.jpg",
  },
  {
    name: "Devansh Sureka",
    position: "Secretary",
    imageUrl: "/2023/devansh.jpg",
  },
  // School Department
  {
    name: "Sitaram Prajapat",
    position: "School Coordinator",
    imageUrl: "/2023/sitaram.jpeg",
  },
  {
    name: "Shreena Kansagra",
    position: "School Coordinator",
    imageUrl: "/2023/shreena.jpg",
  },
  // Health Public Awareness Department
  {
    name: "Bhuvanyu Kumar Sharma",
    position: "Health Public Awareness Coordinator",
    imageUrl: "/2023/bhuvanyu.jpeg",
  },
  {
    name: "Samridhi Agrawal",
    position: "Health Public Awareness Coordinator",
    imageUrl: "/2023/samridhi.jpeg",
  },
  // Parisodh Department
  {
    name: "Isha Gupta",
    position: "Parisodh Coordinator",
    imageUrl: "/2023/isha.jpg",
  },
  {
    name: "Siddharth Bhamidipati",
    position: "Parisodh Coordinator",
    imageUrl: "/2023/siddharth.jpeg",
  },
  // Computer Literacy Programme Department
  {
    name: "Aayush Katakwar",
    position: "Computer Literacy Programme Coordinator",
    imageUrl: "/2023/aayush.jpeg",
  },
  {
    name: "Mansi Mittal",
    position: "Computer Literacy Programme Coordinator",
    imageUrl: "/2023/mansi.jpeg",
  },
  // Umang Department
  {
    name: "Shivansh Saxena",
    position: "Umang Coordinator",
    imageUrl: "/2023/shivansh.jpg",
  },
  {
    name: "Aarushi Tiwari",
    position: "Umang Coordinator",
    imageUrl: "/2023/aarushi.jpeg",
  },
  // Events Department
  {
    name: "Anuj Paliwal",
    position: "Events Coordinator",
    imageUrl: "/2023/anuj.jpeg",
  },
  {
    name: "Jainam Gandhi",
    position: "Events Coordinator",
    imageUrl: "/2023/jainam.jpg",
  },
  // Department of Sponsorship and Collaboration
  {
    name: "Soumya Yadav",
    position: "Sponsorship and Collaboration Coordinator",
    imageUrl: "/2023/soumya.jpg",
  },
  // Department of Design and Development
  {
    name: "Atharv Agarwal",
    position: "Design and Development Coordinator",
    imageUrl: "/2023/atharv.png",
  },
  {
    name: "Medhansh Sharma",
    position: "Design and Development Coordinator",
    imageUrl: "/2023/medhansh.jpeg",
  },
  {
    name: "Dhruv Gupta",
    position: "Design and Development Coordinator",
    imageUrl: "/2023/dhruv.jpeg",
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
