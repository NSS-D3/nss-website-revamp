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

type SponsorshipData = {
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

export const SponsorshipCollaboration = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
 
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/corporate-partnership.jpg', alt: 'Corporate partnership signing', category: 'partnership' },
    { id: 2, src: '/images/grant-management.jpg', alt: 'Grant management workshop', category: 'grants' },
    { id: 3, src: '/images/sponsorship-meeting.jpg', alt: 'Sponsorship discussion meeting', category: 'meetings' },
    { id: 4, src: '/images/collaboration-event.jpg', alt: 'Collaboration event with partners', category: 'events' },
  ];

  //  coordinators data
  const coordinators: Coordinator[] = [
    { name: "Soumya Yadav", position: "Department of Sponsorship and Collaboration Coordinator" },
   
  ];

  
  const sponsorshipData: SponsorshipData = {
    name: "Department of Sponsorship and Collaboration",
    description: "Managing partnerships and sponsorship initiatives, building strategic partnerships and collaboration opportunities.",
    icon: "fas fa-handshake",
    color: "from-indigo-500 to-purple-500",
    members: coordinators.filter((c) => c.position.includes("Sponsorship")),
    details: {
      mission: "To build sustainable partnerships and secure resources for NSS initiatives through strategic collaborations.",
      activities: [
        {
          title: "Corporate partnership development",
          description: "Developing partnerships with corporate organizations to secure funding and resources.",
        },
        {
          title: "Grant application and management",
          description: "Applying for and managing grants to fund NSS initiatives.",
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
    <div className="min-h-screen font-serif bg-[#FFF5F4]">
      
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
            {sponsorshipData.name}
          </h1>
          <p className="text-2xl italic font-light text-[#FFC3C0]">
            Building Strategic Partnerships
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About Our Department
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{sponsorshipData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{sponsorshipData.details.mission}</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Activities
            </h2>
          </div>
          
          <div className="space-y-6">
            {sponsorshipData.details.activities.map((activity, index) => (
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
                  <div className="mt-4 text-gray-700">
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
              Our Collaborations
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

      </main>
    </div>
  );
};

export default SponsorshipCollaboration;