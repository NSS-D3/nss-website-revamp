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

type CLPData = {
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

export const ComputerLiteracyProgramme = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/computer-class.jpg', alt: 'Computer literacy class in session', category: 'training' },
    { id: 2, src: '/images/digital-literacy.jpg', alt: 'Teaching digital literacy to adults', category: 'adults' },
    { id: 3, src: '/images/kids-computers.jpg', alt: 'Children learning computer skills', category: 'children' },
    { id: 4, src: '/images/community-training.jpg', alt: 'Community computer training session', category: 'community' },
    { id: 5, src: '/images/computer-lab.jpg', alt: 'CLP computer lab setup', category: 'infrastructure' },
    { id: 6, src: '/images/volunteer-teaching.jpg', alt: 'Volunteer teaching computer skills', category: 'volunteers' },
  ];

  // coordinators data
  const coordinators: Coordinator[] = [
    { name: "Aayush Katakwar", position: "Computer Literacy Programme Coordinator" },
    { name: "Mansi Mittal", position: "Computer Literacy Programme Manager" },
  ];

  // CLP data 
  const clpData: CLPData = {
    name: "Computer Literacy Programme",
    description: "Teaching digital skills and computer literacy to communities, developing digital education programs and training modules.",
    icon: "fas fa-laptop",
    color: "from-cyan-500 to-blue-500",
    members: coordinators.filter((c) => c.position.includes("Computer")),
    details: {
      mission: "To bridge the digital divide by providing computer education and digital literacy to underserved communities.",
      activities: [
        {
          title: "Basic computer training programs",
          description: "Providing basic computer training to children and adults.",
        },
        {
          title: "Digital literacy for adults",
          description: "Teaching adults how to use computers and the internet.",
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
      
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
              {clpData.name}
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Bridging the Digital Divide
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About CLP
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{clpData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{clpData.details.mission}</p>
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
            {clpData.details.activities.map((activity, index) => (
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
              CLP in Action
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

export default ComputerLiteracyProgramme;