import { useState, useEffect } from 'react';
import { BackButton } from '../components/ui/back-button';


type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

type Activity = {
  title: string;
  description: string;
};

type Coordinator = {
  name: string;
  position: string;
  contact?: string;
};

type SchoolData = {
  name: string;
  description: string;
  icon: string;
  color: string;
  members: Coordinator[];
  details: {
    mission: string;
    activities: Activity[];
  };
};

export const School = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/science-lab.jpg', alt: 'Students in science lab', category: 'academic' },
    { id: 2, src: '/images/sports-day.jpg', alt: 'Annual sports day', category: 'sports' },
    { id: 3, src: '/images/cultural-performance.jpg', alt: 'Cultural program', category: 'cultural' },
    { id: 4, src: '/images/school-building.jpg', alt: 'School infrastructure', category: 'infrastructure' },
    { id: 5, src: '/images/annual-day.jpg', alt: 'Annual day celebration', category: 'events' },
    { id: 6, src: '/images/community-service.jpg', alt: 'NSS volunteers', category: 'community' },
    { id: 7, src: '/images/trophies.jpg', alt: 'School achievements', category: 'achievements' },
    { id: 8, src: '/images/teachers-workshop.jpg', alt: 'Faculty workshop', category: 'faculty' },
    { id: 9, src: '/images/alumni-meet.jpg', alt: 'Alumni visit', category: 'alumni' },
  ];

  //  coordinators data
  const coordinators: Coordinator[] = [
    { name: "Shreena Kansagra", position: "School Coordinator" },
    { name: "Sitaram Prajapat", position: "School Coordinator" },
   
  ];

  
  const schoolData: SchoolData = {
    name: " School",
    description: "Overseeing literacy and education programs, managing school outreach and student mentorship programs.",
    icon: "fas fa-graduation-cap",
    color: "from-blue-500 to-indigo-500",
    members: coordinators.filter((c) => c.position.includes("School") || c.position.includes("Academic")),
    details: {
      mission: `NSS School is a community-driven initiative located in Pilani, committed to delivering high-quality, holistic education to students from grades 1 to 12—with a core mission of providing free education for all. Operated by a team of passionate and dedicated volunteers, the school emphasizes not only strong academic foundations but also the development of moral values, social awareness, and a deep sense of responsibility in its students.\n\nIn addition to a well-rounded academic curriculum, the school collaborates with other departments to actively promote digital literacy, basic health awareness, sustainability, and more. Through a range of thoughtfully designed events and initiatives, NSS School fosters an environment where students are encouraged to think critically, act ethically, and contribute meaningfully to society. The school's approach reflects a strong belief in education as a powerful tool for personal growth and community development.`,
      activities: [
        {
          title: "Umeed",
          description: `Umeed is an inspiring collaborative initiative between NSS School and the CLP (Computer Literacy Program) department, aimed at promoting academic curiosity and excellence among school students in Pilani. This Olympiad features questions from Mathematics, Science, English, and Computer, and is open to students from classes 6 to 10, with the exact class range varying based on the structure and focus set by the organizing team for each edition. \n\nStudents from several schools across Pilani participate in Umeed, including Hanumantpura, Hemant, Rakesh, NSS School, Parc Centre, and others. The event not only recognizes top performers with awards, but also celebrates every participant with certificates of appreciation, encouraging a love for learning and healthy competition, as well as helping students strengthen their preparation for future competitive exams.`,
        },
        {
          title: "ELP",
          description: `ELP (English Learning Program) is a significant initiative at NSS School, BITS Pilani, designed to improve the practical english skills of students from grades 4 to 8. Conducted by our dedicated team of volunteers, the program offers structured classes that focus on both spoken and written English. Through interactive sessions, reading exercises, vocabulary-building activities, and conversational practice, ELP helps students gain fluency and confidence in using the language. The program aims to create a comfortable and encouraging environment where students can freely express themselves and gradually develop a strong command of English.`,
        },
        {
          title: "MAP",
          description: `MAP (Mental Ability Program) runs alongside ELP to strengthen students' logical reasoning and problem-solving abilities. This program engages students in a variety of thought-provoking exercises such as puzzles, pattern recognition, number series, and aptitude-based tasks. Taught in an accessible and engaging way by our volunteers, MAP not only enhances critical thinking but also prepares students for academic challenges ahead, including entrance exams and competitive tests.`,
        },
        {
          title: "Unnati",
          description: `Unnati is a mentorship initiative that connects students with dedicated volunteers who have successfully cleared competitive exams such as JEE, NEET, and KVPY. The experienced volunteers of NSS School provide personalized guidance, sharing valuable insights, study strategies, and motivational support tailored to each student's needs. Through regular lectures, paired with doubt solving sessions and regular mock tests, Unnati aims to help students navigate the challenges of preparing for competitive exams, build confidence, and stay focused on their higher education goals. This program fosters a supportive learning environment where students can seek advice, clarify doubts, and receive encouragement from those who have firsthand experience in excelling at these demanding exams.`,
        },
        {
          title: "Navodaya",
          description: `Navodaya schools, officially known as Jawahar Navodaya Vidyalayas, are prestigious residential institutions dedicated to providing modern, high-quality education to talented students from rural areas across India. These schools aim to nurture and develop the potential of gifted rural youth by offering them access to excellent academic resources and holistic development opportunities. Admission to Jawahar Navodaya Vidyalayas is through the Jawahar Navodaya Vidyalaya Selection Test (JNVST), which is conducted for students seeking entry into Class VI and Class IX. To support aspiring students, we offer focused preparation programs aligned with the JNVST syllabus. These programs are designed to familiarize students with the exam pattern, strengthen their core concepts, and boost their confidence, thereby increasing their chances of success in securing admission to these esteemed institutions.`,
        },
        {
          title: "Utkarsh",
          description: `Utkarsh is a collaborative initiative between the Umang and School departments that seeks to introduce children from underprivileged communities in the Pilani basti to the world of education. The program not only provides transportation to ensure their regular access to the NSS School but also focuses on imparting foundational learning in a supportive environment. By familiarizing them with basic academic concepts and classroom settings, Utkarsh serves as a crucial first step in integrating these children into the formal education system.`,
        },
        {
          title: "Udaan",
          description: `Udaan is NSS School's vibrant year-end celebration that offers students a wonderful platform to showcase their talents and teamwork through performances in dance, music, drama, and poetry. In the weeks leading up to the event, students and volunteers come together for joyful and engaging practice sessions, which not only prepare them for the stage but also help build strong bonds and lasting memories. The excitement and enthusiasm among the students to perform at the school's Annual Day event, Udaan is a truly memorable and heartwarming occasion.`,
        },
      ]
    }
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

 
  // Toggle activity expansion
  const toggleActivity = (index: number) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  return (
    <div className="min-h-screen font-heading bg-[#FFF5F4]">
      {/* Header */}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
              {schoolData.name}
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Empowering Minds, Building Character
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About Our School
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{schoolData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{schoolData.details.mission}</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Programs
            </h2>
          </div>
          
          <div className="space-y-6">
            {schoolData.details.activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0D5760]"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-[#0D5760]">{activity.title}</h3>
                  <span className="text-[#0D5760] text-2xl">
                    {expandedActivity === index ? '−' : '+'}
                  </span>
                </div>
                {expandedActivity === index && (
                  <div className="mt-4 text-gray-700 whitespace-pre-line">
                    {activity.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Aims Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Aims
            </h2>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-8">
            {[
              "To provide quality education that fosters academic excellence",
              "To nurture holistic development through co-curricular activities",
              "To instill moral values and social responsibility in students",
              "To create a safe, inclusive learning environment for all",
              "To develop critical thinking and problem-solving skills",
              "To prepare students for global challenges while preserving cultural roots"
            ].map((aim, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0D5760]">
                <div className="flex items-start">
                  <span className="text-xl mr-3 mt-0.5 text-[#0D5760]">•</span>
                  <span className="text-gray-700 leading-relaxed">{aim}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Vision Section */}
        <section className="mb-20 bg-white p-10 rounded-lg border border-[#FFC3C0] shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#0D5760] mb-8 text-center">
              Our Vision
            </h2>
            <div className="relative">
              <blockquote className="text-lg text-gray-700 leading-relaxed text-center italic">
                <p className="relative">
                  <span className="absolute -left-6 -top-4 text-4xl text-[#FFC3C0]">"</span>
                  To be a premier educational institution that shapes future leaders through innovative teaching, 
                  character building, and community engagement, creating responsible global citizens who contribute 
                  positively to society.
                  <span className="absolute -right-6 -bottom-6 text-4xl text-[#FFC3C0]">"</span>
                </p>
              </blockquote>
              <div className="mt-8 flex justify-center">
                <div className="h-px w-20 bg-[#0D5760] bg-opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              School in Pictures
            </h2>
          </div>
          
          {/* Carousel */}
          <div className="relative mb-12 h-80 md:h-96 rounded-lg overflow-hidden shadow-inner">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zNTAgMjUwSDQ1MFYzNTBIMzUwVjI1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+CjwhLS0gSW1hZ2UgaWNvbiAtLT4KPHA+CjxwYXRoIGQ9Ik0zNzAgMjcwSDQzMFYzMDBIMzcwVjI3MFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzEwSDQzMFYzMjBIMzcwVjMxMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzMwSDQxMFYzNDBIMzcwVjMzMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zODcgMjg3QzM5MC4zMTQgMjg3IDM5MyAyODQuMzE0IDM5MyAyODFDMzkzIDI3Ny42ODYgMzkwLjMxNCAyNzUgMzg3IDI3NUMzODMuNjg2IDI3NSAzODEgMjc3LjY4NiAzODEgMjgxQzM4MSAyODQuMzE0IDM4My42ODYgMjg3IDM4NyAyODdaIiBmaWxsPSIjOUNBNEFGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBNEFGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-xl text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          </section>
          
          
      </main>
    </div>
  );
};

export default School;