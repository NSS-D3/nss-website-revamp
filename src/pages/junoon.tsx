import { useState, useEffect } from 'react';
import { events } from '../lib/events';

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

export const Junoon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  const event = events.find(e => e.title === "Junoon");
  if (!event) return <div className="text-center py-20 font-serif">Event not found</div>;

  // Parse markdown content to extract activities
  const parseActivities = (content: string): Activity[] => {
    const activitySections = content.match(/## (.+?)\n([\s\S]+?)(?=## |$)/g) || [];
    return activitySections.map(section => {
      const titleMatch = section.match(/## (.+?)\n/);
      const descriptionMatch = section.match(/\n([\s\S]+)/);
      return {
        title: titleMatch ? titleMatch[1] : "Activity",
        description: descriptionMatch ? descriptionMatch[1].trim() : ""
      };
    }).filter(act => act.title !== "Registration");
  };

  const activities = parseActivities(event.content);

  // Gallery images for Junoon
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/events/junoon-gallery1.jpg', alt: 'Cultural performances at Junoon', category: 'performance' },
    { id: 2, src: '/events/junoon-gallery2.jpg', alt: 'Workshop session at Junoon', category: 'workshop' },
    { id: 3, src: '/events/junoon-gallery3.jpg', alt: 'Art exhibition at Junoon', category: 'exhibition' },
    { id: 4, src: '/events/junoon-gallery4.jpg', alt: 'Community engagement at Junoon', category: 'community' },
  ];

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
      {/* Elegant Header */}
      <header className="py-16 bg-[#ffc3c0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/events/soft-texture.png')]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold mb-4 text-[#5e2b2a] tracking-tight">
            {event.title}
          </h1>
          <p className="text-2xl italic font-light text-[#7a3f3e]">
            Annual Cultural and Social Awareness Festival
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-[#7a3f3e] bg-opacity-50"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-10 rounded-xl shadow-md border border-[#ffc3c0]/30">
          <h2 className="text-3xl font-semibold text-[#5e2b2a] mb-8 text-center">
            About the Festival
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-auto rounded-lg shadow-xl border-4 border-white transform hover:scale-[1.01] transition duration-300"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="prose max-w-none text-[#5e2b2a]">
                <p className="text-lg mb-6 leading-relaxed">{event.description}</p>
                <div className="bg-[#ffc3c0] bg-opacity-20 p-6 rounded-lg border-l-4 border-[#ffc3c0]">
                  <h3 className="text-xl font-semibold text-[#5e2b2a] mb-3">Event Details</h3>
                  <p className="mb-2"><span className="font-medium">Location:</span> {event.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#5e2b2a] inline-block px-6 pb-2 border-b-2 border-[#5e2b2a]">
              Festival Highlights
            </h2>
          </div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#ffc3c0]"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-[#5e2b2a]">{activity.title}</h3>
                  <span className="text-[#5e2b2a] text-2xl">
                    {expandedActivity === index ? '−' : '+'}
                  </span>
                </div>
                {expandedActivity === index && (
                  <div className="mt-4 text-[#5e2b2a] prose">
                    {activity.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#5e2b2a] inline-block px-6 pb-2 border-b-2 border-[#5e2b2a]">
              Festival Moments
            </h2>
          </div>
          
          {/* Carousel */}
          <div className="relative mb-12 h-80 md:h-[32rem] rounded-xl overflow-hidden shadow-inner">
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
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <p className="text-xl text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="text-center mb-20">
          <div className="bg-[#ffc3c0] bg-opacity-20 p-10 rounded-xl border-2 border-[#ffc3c0]">
            <h2 className="text-3xl font-semibold text-[#5e2b2a] mb-4">Experience Junoon</h2>
            <p className="text-lg text-[#5e2b2a] mb-6 max-w-2xl mx-auto">
              Join us for this vibrant celebration of culture and social awareness.
            </p>
            <button className="bg-[#5e2b2a] hover:bg-[#4a2221] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>
      </main>

      {/* Elegant Footer */}
      <footer className="bg-[#5e2b2a] py-8 text-[#ffc3c0]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-[#ffc3c0] hover:text-white transition">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-[#ffc3c0] hover:text-white transition">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} NSS BITS Pilani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Junoon;