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
    { id: 1, src: '/events/hpa1.jpg', alt: 'Health camp in progress', category: 'camp' },
    { id: 2, src: '/events/hpa2.jpg', alt: 'Clothes distribution event', category: 'donation' },
    { id: 3, src: '/events/hpa3.jpg', alt: 'Health camp', category: 'camp' },
    { id: 4, src: '/events/hpa4.jpg', alt: 'Our soldiers at work', category: 'awareness' },
   
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
          title: "Pad Distribution Drive",
          description:
            "`In our efforts to promote menstrual hygiene and awareness, HPA volunteers organised two pad distribution drives in Hanumantpura. The pads were sponsored by the Indian Red Cross Society. We visited homes and distributed sufficient supply of pads while ensuring the women were familiar with their use and maintaining proper hygiene. This initiative seeks to foster a healthier and more informed community and ensuring that every woman and girl has access to necessary sanitary products",
        },
        {
          title: "Clothes Sorting/Distribution",
          description: `This drive was conducted twice - on 26th November and 26th January in Hanumantpura and Naat Basti. HPA volunteers collected old clothing and toys from the staff of BITS Pilani, around the time of Diwali. We were able to collect 3-4 big cartons worth of clothes. These clothes were distributed in two sessions as HPA volunteers went door to door in Hanumantpura and Naat Basti, where the residents picked out clothes for their families. This event was met with great reception and we successfully distributed the complete inventory`,
        },
        {
          title: "Health Camp Survey",
          description: `The target of the survey was to assess the wellbeing of the villagers and check for any prevalent health conditions prior to the Health Camp, and also to publicize the event. Two rounds of surveys were conducted (in Hanumantpura for the first Health camp and on Poorvi Marg, hostel messes and EMU for the second) where volunteers went from house to house and interacted with as many people living there as they could. This was a huge learning experience as we not only learned to communicate amicably with the local residents of Pilani but also learned about their lifestyles and problems. We also extended them invitations to the health camps which led to a significant footfall during the event`,
        },
        {
          title: "Adult Initiative",
          description: `This initiative was conducted thrice in collaboration with CLP with the target of imparting some useful skills, both technical and non-technical to older women, so they can be self-dependent. We went to Poorvi Marg-1 and taught the women there simple things like writing their names, doing their signature, and teaching them to write in cursive so they can teach their children and also in their day-to-day life. We also taught them to type using text to speech and browse on apps like YouTube. Spending time with the older people was a very fulfilling experience for the volunteers as well.`,
        },
        {
          title: "Health Camp at Old SAC",
          description: `The second Health Camp was conducted at Old SAC on 28th April 2024 from 9AM to 1PM for SSMS and EMU staff and the residents of Poorvi Marg. The event was preceded by extensive publicity to ensure maximum participation. More than 120 patients got free health checkups, BP, blood sugar and temperature checks along with free general medication and further recommendations if needed. This event was greatly appreciated by the participants and advised us to conduct them regularly. The volunteers gained valuable insight and hands-on experience in organising such events.`,
        },
        {
          title: "Health Camp at Hanumantpura",
          description: `The first Health camp was organised for the residents of Hanumantpura on 18th February 2024 at the government primary school building from 9AM to 1PM. The goal of the camp was to provide free health checkups and general medication to people who might find regular hospital visits inconvenient or expensive. With the help of a doctor and nursing staff from MedC, we gave free consultations, BP and temperature checks and distributed free general medication. If they required care we couldn't provide they were recommended to consult another doctor. We received very appreciative feedback and were able to provide healthcare to more than 70 patients`,
        },
        {
          title: "Lecture Series",
          description: `A collaborative initiative between NSS School and HPA aimed to educate School students from grades 2nd to 8th through engaging presentations with interactive images and videos. These sessions, led by HPA volunteers, covered essential topics such as eye care and the importance of extracurricular activities. The duration of each lecture was 1.5 hours, and a total of 3 of these sessions were conducted successfully at the NSS building during school hours. The initiative seeked to promote holistic development among children, fostering a sense of well-being and awareness.`,
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
    <div className="min-h-screen font-heading bg-[#FFF5F4]">
      {/* Header */}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
              {hpaData.name}
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Promoting Health & Wellness in Communities
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
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

export default HealthPublicAwareness;