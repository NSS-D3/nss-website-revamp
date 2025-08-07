export const teamMembers = [
  {
    id: 1,
    name: "Sitaram Prajapat",
    position: "School Coordinator",
  },
  {
    id: 2,
    name: "Shreena Kansagra",
    position: "School Coordinator",
  },
  {
    id: 3,
    name: "Isha Gupta",
    position: "Parisodh Coordinator",
  },

  {
    id: 4,
    name: "Siddharth Bhamidipati",
    position: "Parisodh Coordinator",
  },
  {
    id: 5,
    name: "Aarushi Tiwari",
    position: "Umang Coordinator",
  },
  {
    id: 6,
    name: "Shivansh Saxena",
    position: "Umang Coordinator",
  },
  {
    id: 7,
    name: "Aayush Katakwar",
    position: "Computer Literacy Programme Coordinator",
  },
  {
    id: 8,
    name: "Mansi Mittal",
    position: "Computer Literacy Programme Coordinator",
  },
  {
    id: 9,
    name: "Samridhi Agrawal",
    position: "Health and public awareness Coordinator",
  },
  {
    id: 10,
    name: "Bhuvanyu Kumar",
    position: "Health and public awareness Coordinator",
  },
  {
    id: 11,
    name: "Soumya Yadav",
    position: "Department of Sponsorship and Collaboration Coordinator",
  },
  {
    id: 12,
    name: "Jainam Gandhi",
    position: "Events Coordinator",
  },
  {
    id: 13,
    name: "Anuj Paliwal",
    position: "Events Coordinator",
  },
  {
    id: 14,
    name: "Atharv Agrawal",
    position: "Department of Design and Development Coordinator",
  },
  {
    id: 15,
    name: "Dhruv Gupta",
    position: "Department of Design and Development Coordinator",
  },
  {
    id: 16,
    name: "Medhansh Sharma",
    position: "Department of Design and Development Coordinator",
  },
];

export const coordinators = teamMembers.filter((member) =>
  member.position.includes("Coordinator")
);

// Department data with complete details
export const departments = [
  {
    name: "Computer Literacy Programme",
    id: "computer-literacy-programme",
    description:
      "Teaching digital skills and computer literacy to communities, developing digital education programs and training modules.",
    icon: "fas fa-laptop",
    color: "from-cyan-500 to-blue-500",
    members: coordinators.filter((c) => c.position.includes("Computer")),
    details: {
      mission:
        "To bridge the digital divide by providing computer education and digital literacy to underserved communities.",
      activities: [
        {
          title: "Basic computer training programs",
          description:
            "Providing basic computer training to children and adults.",
        },
        {
          title: "Digital literacy for adults",
          description: "Teaching adults how to use computers and the internet.",
        },
      ],
    },
  },
  {
    name: "Department of Design and Development",
    id: "department-of-design-and-development",
    description:
      "Creating visual content and design solutions for NSS initiatives, developing technical solutions and digital platforms.",
    icon: "fas fa-laptop-code",
    color: "from-pink-500 to-rose-500",
    members: coordinators.filter((c) => c.position.includes("Design")),
    details: {
      mission:
        "To enhance NSS's digital presence and create compelling visual content that amplifies our social impact message.",
      activities: [
        {
          title: "Website and mobile app development",
          description:
            "Developing and maintaining the NSS website and mobile app.",
        },
        {
          title: "Social media content creation",
          description: "Creating content for NSS's social media channels.",
        },
      ],
    },
  },
  {
    name: "Department of Sponsorship and Collaboration",
    id: "department-of-sponsorship-and-collaboration",
    description:
      "Managing partnerships and sponsorship initiatives, building strategic partnerships and collaboration opportunities.",
    icon: "fas fa-handshake",
    color: "from-indigo-500 to-purple-500",
    members: coordinators.filter((c) => c.position.includes("Sponsorship")),
    details: {
      mission:
        "To build sustainable partnerships and secure resources for NSS initiatives through strategic collaborations.",
      activities: [
        {
          title: "Corporate partnership development",
          description:
            "Developing partnerships with corporate organizations to secure funding and resources.",
        },
        {
          title: "Grant application and management",
          description:
            "Applying for and managing grants to fund NSS initiatives.",
        },
      ],
    },
  },
  {
    name: "Events",
    id: "events",
    description:
      "Planning and organizing major NSS events and festivals, managing event logistics and coordination activities.",
    icon: "fas fa-calendar-alt",
    color: "from-purple-500 to-pink-500",
    members: coordinators.filter((c) => c.position.includes("Events")),

    details: {
      mission:
        "To create impactful events that raise social awareness and engage the community in meaningful activities.",
      activities: [
        {
          title: "Annual festivals and cultural events",
          description:
            "Organizing annual festivals and cultural events to promote social awareness.",
        },
        {
          title: "Awareness campaigns and workshops",
          description:
            "Organizing awareness campaigns and workshops on various social issues.",
        },
      ],
    },
  },
  {
    name: "Health Public Awareness",
    id: "health-public-awareness",
    description:
      "Managing health camps and wellness programs, leading health awareness campaigns and medical outreach.",
    icon: "fas fa-stethoscope",
    color: "from-green-500 to-teal-500",
    members: coordinators.filter((c) => c.position.includes("Health")),
    details: {
      mission: `The Department of Health and Public Awareness aims to spread awareness about important health and social issues and help society. We work to empower those in need so that they can live a more comfortable life and make well-informed decisions. With our initiatives, we have managed to cover several health, employment, literacy, and sanitation issues in and around Pilani.\n\nHPA believes in serving society. Over the years, we have established trustworthy relations with the people in and around the villages of Pilani. We aim to make every individual, irrespective of their gender or age, independent enough to lead an informed life.\n`,
      activities: [
        {
          title: "Database Creation and Extensive Survey",
          description:
            "As part of this new initiative, a detailed database of beneficiaries will be developed for Hanumantpura, Poorvi Marg, and other prospective locations. This database will compile crucial information on population demographics, basic needs, existing challenges, and the community’s awareness of government schemes. The insights gathered through this extensive survey will help in designing and implementing future initiatives that are specifically tailored to address the unique needs of each area.",
        },
        {
          title: "Clothes Sorting/Distribution",
          description: `Building on the success of last year's efforts, HPA will once again collect and distribute old clothes and toys generously donated by students and faculty members. This initiative not only helps meet basic needs but also encourages sustainability by reducing wastage.\n\nHPA volunteers carefully sort through the collected items, as well as those already in inventory, categorizing them into winter wear, summer wear, and unusable items. Usable clothes are neatly stored and later distributed in nearby villages and bastis, bringing comfort and smiles to those who need them most.\n`,
        },
        {
          title: "Health Camp",
          description: `With the valuable support of medical professionals from MedC, HPA organises free health camps aimed at providing essential healthcare services to under-resourced communities. These camps will include general health checkups, where individuals can get their vital signs (such as blood pressure, heart rate, and temperature) monitored, along with basic screenings for common illnesses.\n\nIn addition to the checkups, general medications—such as pain relievers, vitamins, and treatments for minor infections—will be distributed free of cost. This initiative is especially focused on reaching individuals who have limited or no access to medical facilities. By offering these services, we aim to promote early detection of health issues, raise awareness about hygiene and wellness, and ensure that basic healthcare becomes accessible to everyone, regardless of their socioeconomic background.\n`,
        },
        {
          title: "Adult Initiative",
          description: `HPA plans to conduct 2–3 skill-building initiatives specifically designed for older women in the nearby communities, with the goal of fostering self-reliance and enabling them to play a more active role in their families' growth and education.\n\nThese initiatives will be informed by a preliminary community survey that aims to identify the interests, existing skill levels, and needs of the women. Based on the survey findings, the programs may include training in areas such as tailoring, handicrafts, basic literacy, digital skills, or home-based entrepreneurship.\n\nBy equipping these women with practical and sustainable skills, the initiative seeks not only to improve their own financial independence and confidence but also to enable them to better support and educate their children. This ripple effect helps strengthen entire families and contributes to the long-term development of the community.\n`,
        },
        {
          title: "Policy Documentation",
          description: `HPA is reviving a past initiative to compile and share information on useful government schemes and policies with the communities nearby. These documents will highlight benefits related to healthcare, education, employment, and welfare that are often underutilized due to a lack of awareness.\n\nOur volunteers will simplify the language and format to ensure the information is easy to understand and accessible to everyone in the Pilani community. This effort aims to empower individuals to make use of the resources and support available to them.\n`,
        },
        {
          title: "Health Blog",
          description: `An exciting initiative by HPA and D3, where we bring you insights, tips, and facts about health, wellness, and safety — because caring for yourself and those around you is where true service begins!`,
        },
        {
          title: "Lecture Series",
          description: `To promote holistic development and awareness among younger students, HPA will continue organising lecture series in collaboration with School to educate students about current and important issues related to health and sanitation.`,
        },
      ],
    },
  },
  {
    name: "Parisodh",
    id: "parisodh",
    description:
      "Leading environmental cleanup drives and sustainability projects, coordinating waste management and green initiatives.",
    icon: "fas fa-seedling",
    color: "from-green-600 to-lime-500",
    members: coordinators.filter((c) => c.position.includes("Parisodh")),
    details: {
      mission:
        "To promote environmental conservation and sustainability through community-driven initiatives.",
      activities: [
        {
          title: "Tree plantation drives",
          description: "Planting trees to improve the local environment.",
        },
        {
          title: "Waste segregation and recycling programs",
          description:
            "Promoting waste segregation and recycling to reduce landfill waste.",
        },
      ],
    },
  },
  {
    name: "School",
    id: "school",
    description:
      "Overseeing literacy and education programs, managing school outreach and student mentorship programs.",
    icon: "fas fa-graduation-cap",
    color: "from-blue-500 to-indigo-500",
    members: coordinators.filter((c) => c.position.includes("School")),
    details: {
      mission: `NSS School is a community-driven initiative located in Pilani, committed to delivering high-quality, holistic education to students from grades 1 to 12—with a core mission of providing free education for all.  Operated by a team of passionate and dedicated volunteers, the school emphasizes not only strong academic foundations but also the development of moral values, social awareness, and a deep sense of responsibility in its students.\n\nIn addition to a well-rounded academic curriculum, the school collaborates with other departments to actively promote digital literacy, basic health awareness, sustainability, and more. Through a range of thoughtfully designed events and initiatives, NSS School fosters an environment where students are encouraged to think critically, act ethically, and contribute meaningfully to society. The school’s approach reflects a strong belief in education as a powerful tool for personal growth and community development.\n`,
      activities: [
        {
          title: "Umeed",
          description: `Umeed is an inspiring collaborative initiative between NSS School and the CLP (Computer Literacy Program) department, aimed at promoting academic curiosity and excellence among school students in Pilani. This Olympiad features questions from Mathematics, Science, English, and Computer, and is open to students from classes 6 to 10, with the exact class range varying based on the structure and focus set by the organizing team for each edition. \n            \n            Students from several schools across Pilani participate in Umeed, including Hanumantpura, Hemant, Rakesh, NSS School, Parc Centre, and others. The event not only recognizes top performers with awards, but also celebrates every participant with certificates of appreciation, encouraging a love for learning and healthy competition, as well as helping students strengthen their preparation for future competitive exams.`,
        },
        {
          title: "ELP",
          description: `ELP (English Learning Program) is a significant initiative at NSS School, BITS Pilani, designed to improve the  practical english skills of students from grades 4 to 8. Conducted by our dedicated team of volunteers, the program offers structured classes that focus on both spoken and written English. Through interactive sessions, reading exercises, vocabulary-building activities, and conversational practice, ELP helps students gain fluency and confidence in using the language. The program aims to create a comfortable and encouraging environment where students can freely express themselves and gradually develop a strong command of English.`,
        },
        {
          title: "MAP",
          description: `MAP (Mental Ability Program) runs alongside ELP to strengthen students’ logical reasoning and problem-solving abilities. This program engages students in a variety of thought-provoking exercises such as puzzles, pattern recognition, number series, and aptitude-based tasks. Taught in an accessible and engaging way by our volunteers, MAP not only enhances critical thinking but also prepares students for academic challenges ahead, including entrance exams and competitive tests.`,
        },
        {
          title: "Unnati",
          description: `Unnati is a mentorship initiative that connects students with dedicated volunteers who have successfully cleared competitive exams such as JEE, NEET, and KVPY. The experienced volunteers of NSS School provide personalized guidance, sharing valuable insights, study strategies, and motivational support tailored to each student’s needs. Through regular lectures, paired with doubt solving sessions and regular mock tests, Unnati aims to help students navigate the challenges of preparing for competitive exams, build confidence, and stay focused on their higher education goals. This program fosters a supportive learning environment where students can seek advice, clarify doubts, and receive encouragement from those who have firsthand experience in excelling at these demanding exams.`,
        },
        {
          title: "Navodaya",
          description: `Navodaya schools, officially known as Jawahar Navodaya Vidyalayas, are prestigious residential institutions dedicated to providing modern, high-quality education to talented students from rural areas across India. These schools aim to nurture and develop the potential of gifted rural youth by offering them access to excellent academic resources and holistic development opportunities. Admission to Jawahar Navodaya Vidyalayas is through the Jawahar Navodaya Vidyalaya Selection Test (JNVST), which is conducted for students seeking entry into Class VI and Class IX. To support aspiring students, we offer focused preparation programs aligned with the JNVST syllabus. These programs are designed to familiarize students with the exam pattern, strengthen their core concepts, and boost their confidence, thereby increasing their chances of success in securing admission to these esteemed`,
        },
        {
          title: "Utkarsh",
          description: `Utkarsh is a collaborative initiative between the Umang and School departments that seeks to introduce children from underprivileged communities in the Pilani basti to the world of education. The program not only provides transportation to ensure their regular access to the NSS School but also focuses on imparting foundational learning in a supportive environment. By familiarizing them with basic academic concepts and classroom settings, Utkarsh serves as a crucial first step in integrating these children into the formal education system.`,
        },
        {
          title: "Udaan",
          description: `Udaan is NSS School’s vibrant year-end celebration that offers students a wonderful platform to showcase their talents and teamwork through performances in dance, music, drama, and poetry. In the weeks leading up to the event, students and volunteers come together for joyful and engaging practice sessions, which not only prepare them for the stage but also help build strong bonds and lasting memories. The excitement and enthusiasm among the students to perform at the school’s Annual Day event, Udaan is a truly memorable and heartwarming occasion.`,
        },
      ],
    },
  },
  {
    name: "Umang",
    id: "umang",
    description: "Organizing support programmes for those in need.",
    icon: "fas fa-hands-helping",
    color: "from-orange-500 to-red-500",
    members: coordinators.filter((c) => c.position.includes("Umang")),
    details: {
      mission:
        "To provide essential resources and support to underprivileged communities through organized support programmes.",
      activities: [
        {
          title: "Umang Scholarship Programme (USP)",
          description: `Under this programme, we provide scholarships to over 160 students from Pilani, primarily based on merit. We conduct a scholarship test to identify deserving candidates and fund the education of underprivileged students, ensuring that financial constraints do not hinder their academic growth.In addition to the test, our team conducts home visits to gain a better understanding of the students' socio-economic backgrounds and verify the information provided. Through this initiative, we strive to empower underprivileged students by enabling them to pursue their education without financial constraints.`,
        },
        {
          title: "Umang Collection (UC)",
          description: `This initiative is the largest crowdfunding event on campus, aimed at raising funds from the BITSian community to support the education of underprivileged students.The funds raised through this campaign are used to provide scholarships to deserving students, enabling them to continue their education without financial burden`,
        },
        {
          title: "Project Pragya",
          description: `Project Pragya is conducted specifically for the communities of Court Basti and Jherli Basti. Through this initiative, we aim to support the educational needs of children in these areas by distributing essential stationery items and providing scholarships to deserving students. The project focuses on ensuring that lack of basic resources does not become a barrier to their learning and academic progress.`,
        },
        {
          title: "Career Counselling",
          description: `As part of our career counselling initiative, we provide students with information about various academic streams, career opportunities, and future prospects available to them. Our goal is to help them make informed decisions about their educational and professional paths. To achieve this, we conduct interactive sessions in their schools, where we guide them through different options they can pursue based on their interests and strengths.`,
        },
        {
          title: "Motivational Sessions",
          description: `We conduct motivational sessions with the aim of uplifting and encouraging the students we support. These sessions are designed to boost their morale, build self-confidence, and inspire them to stay focused on their academic and personal goals. By sharing real-life success stories and fostering a positive mindset, we strive to create an environment where students feel supported and motivated to overcome challenges and realize their full potential.`,
        },
        {
          title: "Student Mentorship Programme",
          description: `In the Student Mentorship Programme (SMP), we offer continuous support to students in both their personal and academic lives. The mentor helps the mentee navigate academic challenges, manage time effectively, while also being a source of emotional support. Each student is paired with a dedicated mentor who serves not only as a guide but also as a friend they can rely on`,
        },
      ],
    },
  },
];
