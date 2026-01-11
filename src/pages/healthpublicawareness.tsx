import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
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
    { name: "Samridhi Agrawal", position: "Health and Public Awareness Coordinator" },
    { name: "Bhuvanyu Kumar Sharma", position: "Health and Public Awareness Coordinator" },
  ];

  // Health and Public Awareness data
  const hpaData: HealthPublicAwarenessData = {
    name: "Health and Public Awareness",
    description: "We manage health camps and wellness programs, lead health awareness campaigns, and conduct medical outreach to promote community well-being.",
    icon: "fas fa-stethoscope",
    color: "from-green-500 to-teal-500",
    members: coordinators.filter((c) => c.position.includes("Health")),
    details: {
      mission: `The Department of Health and Public Awareness aims to spread awareness about important health and social issues and help society. We work to empower those in need so that they can live a more comfortable life and make well-informed decisions. With our initiatives, we have managed to cover several health, employment, literacy, and sanitation issues in and around Pilani.\n\nHPA believes in serving society. Over the years, we have established trustworthy relations with the people in and around the villages of Pilani. We aim to make every individual, irrespective of their gender or age, independent enough to lead an informed life.\n`,
      activities: [
        {
          title: "Pad Distribution Drive",
          description: `In our efforts to promote menstrual hygiene and awareness, HPA volunteers organise pad distribution drives in Hanumantpura, with sanitary pads sponsored by the Indian Red Cross Society. Volunteers visit homes to distribute a sufficient supply of pads, while also educating women on their proper use and the importance of maintaining hygiene. This initiative aims to foster a healthier and more informed community, ensuring that every woman and girl has access to essential sanitary products.`
        },
        {
          title: "Clothes Sorting/Distribution",
          description: `HPA organises clothes sorting and distribution drives in communities such as Hanumantpura and Naat Basti. Old clothing and toys are collected from the staff of BITS Pilani, often around festive occasions like Diwali. Volunteers sort and pack the donations, which typically amount to several large cartons, and conduct door-to-door distribution, allowing residents to select items for their families. These drives receive enthusiastic community response and ensure that the collected inventory is fully distributed to those in need.`
        },
        {
          title: "Health Camp Survey",
          description: `The Health Camp Survey aims to assess the well-being of local residents and identify any prevalent health conditions prior to each camp, while also raising awareness about the upcoming event. Surveys are conducted in multiple locations, including Hanumantpura, Poorvi Marg, hostel messes, and EMU, where volunteers go door-to-door interacting with as many residents as possible. This process helps volunteers build effective communication with the local community, understand their lifestyles and challenges, and personally invite them to attend the health camps—resulting in significant community participation.`
        },
        {
          title: "Adult Initiative",
          description: `The Adult Initiative, conducted in collaboration with CLP, focuses on imparting both technical and non-technical skills to older women, enabling them to become more self-reliant. Volunteers visit areas such as Poorvi Marg-1 to teach practical skills, including writing names, creating signatures, and writing in cursive—skills that not only assist in daily life but also empower the women to guide their children. Additionally, participants learn to use text-to-speech tools for typing and to browse educational resources on platforms like YouTube. This initiative strengthens community engagement while fostering confidence and independence among the women.`
        },
        {
          title: "Health Camp at Old SAC",
          description: `The Health Camp at Old SAC serves SSMS and EMU staff as well as residents of Poorvi Marg, offering free health services from 9:00 AM to 1:00 PM. Extensive publicity precedes the event to encourage maximum participation. Attendees receive comprehensive checkups, including blood pressure, blood sugar, and temperature measurements, along with free general medication and recommendations for further care if required. The initiative is well-received by the community and provides volunteers with valuable experience in planning and managing large-scale health events.`
        },
        {
          title: "Health Camp at Hanumantpura",
          description: `The Health Camp at Hanumantpura is held at the government primary school building from 9:00 AM to 1:00 PM, with the aim of providing free health checkups and general medication to residents who may find regular hospital visits inconvenient or costly. Supported by a doctor and nursing staff from MedC, the camp offers free consultations, blood pressure and temperature checks, and distributes general medication. Patients requiring additional care are advised to consult specialised medical professionals. The initiative is met with warm appreciation from the community and provides essential healthcare to more than 70 residents.`
        },
        {
          title: "Lecture Series",
          description: `The Lecture Series, a collaborative initiative between NSS School and HPA, aims to educate students from grades 2 to 8 through engaging presentations featuring interactive images and videos. Led by HPA volunteers, these sessions cover essential topics such as eye care and the importance of extracurricular activities. Each lecture lasts approximately 1.5 hours and is conducted during school hours at the NSS building. The initiative promotes holistic development, fostering well-being and awareness among children.`
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
      <SEO 
        title="Health and Public Awareness - NSS BITS Pilani" 
        description="We manage health camps and wellness programs, lead health awareness campaigns, and conduct medical outreach to promote community well-being." 
      />
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

        {/* Aims Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Aims
            </h2>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-8">
            {[
              "To promote community health through regular health camps, awareness drives, and preventive care initiatives.",
              "To enhance public awareness on hygiene, nutrition, and wellness through educational outreach and campaigns.",
              "To empower individuals—especially women—by imparting practical skills for self-reliance.",
              "To provide support and resources to underserved communities through targeted distribution drives.",
              "To foster volunteerism and social responsibility among youth through active engagement in service projects.",
              "To build sustainable partnerships with organisations to expand the reach and impact of our initiatives."
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
                  To be a leading community health and outreach organisation that promotes well-being, empowers individuals through knowledge and skills, and fosters a culture of compassion and service, creating healthier and more informed communities.
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
              HPA in Action
            </h2>
          </div>
          
          {/* Carousel */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-inner">
            <div className="aspect-[16/9]">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
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
          </div>
    
        </section>

      </main>
    </div>
  );
};

export default HealthPublicAwareness;