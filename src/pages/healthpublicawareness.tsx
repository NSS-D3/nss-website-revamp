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

type HealthPublicAwarenessData = {
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

export const HealthPublicAwareness = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/health-camp.jpg', alt: 'Health camp in progress', category: 'camp' },
    { id: 2, src: '/images/clothes-distribution.jpg', alt: 'Clothes distribution event', category: 'donation' },
    { id: 3, src: '/images/skill-workshop.jpg', alt: 'Skill development workshop', category: 'education' },
    { id: 4, src: '/images/health-lecture.jpg', alt: 'Health awareness lecture', category: 'awareness' },
    { id: 5, src: '/images/community-survey.jpg', alt: 'Community survey being conducted', category: 'survey' },
    { id: 6, src: '/images/policy-documentation.jpg', alt: 'Policy documentation work', category: 'documentation' },
  ];

  // coordinators data
  const coordinators: Coordinator[] = [
    { name: "Samridhi Agrawal", position: "Health Public Awareness Coordinator" },
    { name: "Bhuvanyu Kumar Sharma", position: "Health Public Awareness Coordinator" },
  ];

  // Health Public Awareness data
  const hpaData: HealthPublicAwarenessData = {
    name: "Health Public Awareness",
    description: "Managing health camps and wellness programs, leading health awareness campaigns and medical outreach.",
    icon: "fas fa-stethoscope",
    color: "from-green-500 to-teal-500",
    members: coordinators.filter((c) => c.position.includes("Health")),
    details: {
      mission: `The Department of Health and Public Awareness aims to spread awareness about important health and social issues and help society. We work to empower those in need so that they can live a more comfortable life and make well-informed decisions. With our initiatives, we have managed to cover several health, employment, literacy, and sanitation issues in and around Pilani.\n\nHPA believes in serving society. Over the years, we have established trustworthy relations with the people in and around the villages of Pilani. We aim to make every individual, irrespective of their gender or age, independent enough to lead an informed life.\n`,
      activities: [
        {
          title: "Database Creation and Extensive Survey",
          description:
            "As part of this new initiative, a detailed database of beneficiaries will be developed for Hanumantpura, Poorvi Marg, and other prospective locations. This database will compile crucial information on population demographics, basic needs, existing challenges, and the community's awareness of government schemes. The insights gathered through this extensive survey will help in designing and implementing future initiatives that are specifically tailored to address the unique needs of each area.",
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
            {hpaData.name}
          </h1>
          <p className="text-2xl italic font-light text-[#FFC3C0]">
            Promoting Health & Wellness in Communities
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About HPA
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{hpaData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{hpaData.details.mission}</p>
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
            {hpaData.details.activities.map((activity, index) => (
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
              HPA in Action
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
        {hpaData.members.length > 0 && (
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
                Our Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hpaData.members.map((member, index) => (
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

export default HealthPublicAwareness;