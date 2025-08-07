import { useState, useEffect } from 'react';


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

type UmangData = {
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

export const Umang = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/umang-scholarship.jpg', alt: 'Umang Scholarship distribution', category: 'scholarship' },
    { id: 2, src: '/images/umang-collection.jpg', alt: 'Umang Collection event', category: 'fundraising' },
    { id: 3, src: '/images/project-pragya.jpg', alt: 'Project Pragya stationery distribution', category: 'community' },
    { id: 4, src: '/images/career-counselling.jpg', alt: 'Career counselling session', category: 'education' },
    { id: 5, src: '/images/motivational-session.jpg', alt: 'Motivational session with students', category: 'mentorship' },
    { id: 6, src: '/images/student-mentorship.jpg', alt: 'Student mentorship program', category: 'mentorship' },
  ];

  //  coordinators data
  const coordinators: Coordinator[] = [
    { name: "Aarushi Tiwari", position: "Umang Coordinator" },
    { name: "Shivansh Saxena", position: "Umang Coordinator" },
  ];

 
  const umangData: UmangData = {
    name: "Umang",
    description: "Organizing support programmes for those in need.",
    icon: "fas fa-hands-helping",
    color: "from-orange-500 to-red-500",
    members: coordinators.filter((c) => c.position.includes("Umang")),
    details: {
      mission: "To provide essential resources and support to underprivileged communities through organized support programmes.",
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
      ]
    }
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  

  
  const toggleActivity = (index: number) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  return (
    <div className="min-h-screen font-serif bg-[#FFF5F4]">
      {/* Header */}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
            {umangData.name}
          </h1>
          <p className="text-2xl italic font-light text-[#FFC3C0]">
            Supporting Those in Need
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About Umang
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{umangData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{umangData.details.mission}</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Initiatives
            </h2>
          </div>
          
          <div className="space-y-6">
            {umangData.details.activities.map((activity, index) => (
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

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Umang in Action
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

        {/* Team Section */}
        {umangData.members.length > 0 && (
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
                Our Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umangData.members.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFC3C0] flex items-center justify-center text-3xl text-[#0D5760] font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D5760]">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  {member.contact && (
                    <p className="text-sm text-[#0D5760]">{member.contact}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Umang;