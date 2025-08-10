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

type ParisodhData = {
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

export const Parisodh = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  // Sample gallery data
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/tree-plantation.jpg', alt: 'Tree plantation drive', category: 'plantation' },
    { id: 2, src: '/images/waste-segregation.jpg', alt: 'Waste segregation workshop', category: 'recycling' },
    { id: 3, src: '/images/cleanup-drive.jpg', alt: 'Community cleanup drive', category: 'cleanup' },
    { id: 4, src: '/images/eco-workshop.jpg', alt: 'Environmental awareness workshop', category: 'education' },
  ];

  //  coordinators data
  const coordinators: Coordinator[] = [
    { name: "Isha Verma", position: "Parisodh Coordinator" },
    { name: "Siddharth Bhamidipati", position: "Parisodh Coordinator" },
  ];

  
  const parisodhData: ParisodhData = {
    name: "Parisodh",
    description: "Leading environmental cleanup drives and sustainability projects, coordinating waste management and green initiatives.",
    icon: "fas fa-seedling",
    color: "from-green-600 to-lime-500",
    members: coordinators.filter((c) => c.position.includes("Parisodh")),
    details: {
      mission: "To promote environmental conservation and sustainability through community-driven initiatives.",
      activities: [
        {
          title: "Tree plantation drives",
          description: "Planting trees to improve the local environment.",
        },
        {
          title: "Waste segregation and recycling programs",
          description: "Promoting waste segregation and recycling to reduce landfill waste.",
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
            {parisodhData.name}
          </h1>
          <p className="text-2xl italic font-light text-[#FFC3C0]">
            Environmental Conservation & Sustainability
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About Parisodh
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{parisodhData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{parisodhData.details.mission}</p>
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
            {parisodhData.details.activities.map((activity, index) => (
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
              Parisodh in Action
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

export default Parisodh;