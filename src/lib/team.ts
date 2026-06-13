export type TeamMember = {
  name: string;
  position: string;
  imageUrl?: string;
  linkedinUrl?: string;
  emailUrl?: string;
};

export const teamMembers: TeamMember[] = [
  //Year 2026-2027
  // Office Bearers
  {
    name: "Pradyumna Popli",
    position: "President",
    imageUrl: "/2024/Pradyumna.jpeg",
  },
  {
    name: "Sarah Gupta",
    position: "Vice President",
    imageUrl: "/2024/Sarah.jpeg",
  },
  {
    name: "Lakshmanan Ganpath",
    position: "Secretary",
    imageUrl: "/2024/Ganapath.jpeg",
  },
  // School Department
  {
    name: "Shubham Jain",
    position: "School Coordinator",
    imageUrl: "/2024/Shubham.jpeg",
  },
  {
    name: "Anushka Mohanta",
    position: "School Coordinator",
    imageUrl: "/2024/Anushka.jpeg",
  },
  // Health and Public Awareness Department
  {
    name: "Aryan Saxena",
    position: "Health and Public Awareness Coordinator",
    imageUrl: "/2024/Aryan_Saxena.jpeg",
  },
  {
    name: "Keerthi Aaradhana",
    position: "Health and Public Awareness Coordinator",
    imageUrl: "/2024/Keerthi.jpeg",
  },
  // Computer Literacy Programme Department
  {
    name: " Prachal Mittal",
    position: "Computer Literacy Programme Coordinator",
    imageUrl: "/2024/Prachal.jpeg",
  },
  {
    name: "Antra Porwal",
    position: "Computer Literacy Programme Coordinator",
    imageUrl: "/2024/Antra.jpeg",
  },
  // Umang Department
  {
    name: "Nick Fernandez",
    position: "Umang Coordinator",
    imageUrl: "/2024/Nick.jpeg",
  },
  {
    name: "Aryan Kulkarni",
    position: "Umang Coordinator",
    imageUrl: "/2024/Aryan_Kulkarni.jpeg",
  },
  // Events Department
  {
    name: "Prachita Pande",
    position: "Events Coordinator",
    imageUrl: "/2024/Prachita.jpeg",
  },
  {
    name: "Nishque Sanodiya",
    position: "Events Coordinator",
    imageUrl: "/2024/Nishque.jpeg",
  },
  // Department of Sponsorship and Collaboration
  {
    name: "Abhyuday Singh",
    position: "Sponsorship and Collaboration Coordinator",
    imageUrl: "/2024/Abhyuday.jpeg",
  },
  {
    name: "Himinish Taneja",
    position: "Sponsorship and Collaboration Coordinator",
    imageUrl: "/2024/Himnish.jpeg",
  },
    // Department of Design and Development
  {
    name: "Pranjal Agrawal",
    position: "Design and Development Coordinator",
    imageUrl: "/2024/Pranjal.jpeg",
  },
  {
    name: "Aayush Raj",
    position: "Design and Development Coordinator",
    imageUrl: "/2024/Aayush.jpeg",
  },
];

  // // Office Bearers
  // {
  //   name: "Parth Pahade",
  //   position: "President",
  //   imageUrl: "/2023/parth.jpg",
  // },
  // {
  //   name: "Harshit Jhawar",
  //   position: "Vice President",
  //   imageUrl: "/2023/harshit.jpg",
  // },
  // {
  //   name: "Devansh Sureka",
  //   position: "Secretary",
  //   imageUrl: "/2023/devansh.jpg",
  // },
  // // School Department
  // {
  //   name: "Sitaram Prajapat",
  //   position: "School Coordinator",
  //   imageUrl: "/2023/sitaram.jpeg",
  // },
  // {
  //   name: "Shreena Kansagra",
  //   position: "School Coordinator",
  //   imageUrl: "/2023/shreena.jpg",
  // },
  // // Health and Public Awareness Department
  // {
  //   name: "Bhuvanyu Kumar Sharma",
  //   position: "Health and Public Awareness Coordinator",
  //   imageUrl: "/2023/bhuvanyu.jpeg",
  // },
  // {
  //   name: "Samridhi Agrawal",
  //   position: "Health and Public Awareness Coordinator",
  //   imageUrl: "/2023/samridhi.jpeg",
  // },
  // // Parisodh Department
  // {
  //   name: "Siddharth Bhamidipati",
  //   position: "Parishodh Coordinator",
  //   imageUrl: "/2023/siddharth.jpeg",
  // },
  // // Computer Literacy Programme Department
  // {
  //   name: "Aayush Katakwar",
  //   position: "Computer Literacy Programme Coordinator",
  //   imageUrl: "/2023/aayush.jpeg",
  // },
  // {
  //   name: "Arin Samant",
  //   position: "Computer Literacy Programme Coordinator",
  //   imageUrl: "/2023/arin.jpeg",
  // },
  // // Umang Department
  // {
  //   name: "Shivansh Saxena",
  //   position: "Umang Coordinator",
  //   imageUrl: "/2023/shivansh.jpg",
  // },
  // {
  //   name: "Aarushi Tiwari",
  //   position: "Umang Coordinator",
  //   imageUrl: "/2023/aarushi.jpeg",
  // },
  // {
  //   name: "Siya Madan",
  //   position: "Umang Coordinator",
  //   imageUrl: "/2023/siya.jpeg",
  // },
  // // Events Department
  // {
  //   name: "Anuj Paliwal",
  //   position: "Events Coordinator",
  //   imageUrl: "/2023/anuj.jpeg",
  // },
  // {
  //   name: "Jainam Gandhi",
  //   position: "Events Coordinator",
  //   imageUrl: "/2023/jainam.jpg",
  // },
  // // Department of Sponsorship and Collaboration
  // {
  //   name: "Soumya Yadav",
  //   position: "Sponsorship and Collaboration Coordinator",
  //   imageUrl: "/2023/soumya.jpg",
  // },
  //   // Department of Design and Development
  //   {
  //     name: "Atharv Agarwal",
  //     position: "Design and Development Coordinator",
  //     imageUrl: "/2023/atharv.png",
  //   },
  //   {
  //     name: "Medhansh Sharma",
  //     position: "Design and Development Coordinator",
  //     imageUrl: "/2023/medhansh.jpeg",
  //   },
  //   {
  //     name: "Dhruv Gupta",
  //     position: "Design and Development Coordinator",
  //     imageUrl: "/2023/dhruv.jpeg",
  //   },
  // ];

export type Professor = {

  name: string;
  position: string;
  email: string;
  imageUrl?: string;
};

export const professors: Professor[] = [
  {

    name: "Prof. Meghana Tare",
    position: "Program Coordinator",
    email: "meghana.tare@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/meghna.jpeg"
  },
  {
    name: "Prof. Prashant Uday Manohar",
    position: "Programme Officer",
    email: "prashant.manohar@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/prashant-uday.jpeg"
  },
  {
    name: "Prof. Sudeshna Mukherjee",
    position: "Programme Officer",
    email: "sudeshna.chowdhury@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/sudheshna.jpeg"
  },
  {
    name: "Prof. Chandra Shekhar",
    position: "Programme Officer",
    email: "chandra.shekhar@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/chandrashekar.jpeg"
  },
  {
    name: "Prof. Anirudh Singh Rana",
    position: "Programme Officer",
    email: "anirudh.rana@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/asr.jpeg"
  },
  {
    name: "Prof. Nirankush Dutta",
    position: "Programme Officer",
    email: "nirankush.dutta@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/nirankush.jpeg"
  },
  {
    name: "Prof. Sandeep Joshi",
    position: "Programme Officer",
    email: "sandeep.joshi@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/sandeep.jpeg"
  },
  {
    name: "Prof. Balakumaran Chandrashekar",
    position: "Programme Officer",
    email: "balakumaran.c@pilani.bits-pilani.ac.in",
    imageUrl: "/profs/balakumaran.jpeg"
  }
];
