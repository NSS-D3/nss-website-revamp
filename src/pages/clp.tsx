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
    { id: 1, src: '/events/clp1.jpg', alt: 'Computer literacy class in session', category: 'training' },
    { id: 2, src: '/events/clp2.jpg', alt: 'Teaching digital literacy to children', category: 'training' },
    { id: 3, src: '/events/clp3.jpg', alt: 'Children learning computer skills', category: 'training' },
    { id: 4, src: '/events/clp4.jpg', alt: 'Community computer training session', category: 'training' },
  ];

  const coordinators: Coordinator[] = [
    { name: "Aayush Katakwar", position: "Computer Literacy Programme Coordinator" },
    { name: "Mansi Mittal", position: "Computer Literacy Programme Manager" },
  ];

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
          title: "Government School (GS)",
          description: "Students of classes 6-8th from nearby schools: Vashishth Pathak Public School, Vijay Public School, Holy Child School, CEERI Vidya, Birla School, etc came to PARC building every Monday to Saturday and they were taught basic computer applications such as Excel, Word, PowerPoint and Networking. On an average, 15-20 students regularly attended every slot, with the highest attendance being around 30. Overall, the children had a positive feedback and wish to learn from an updated syllabus in the coming semester.",
        },
        {
          title: "Ummeed",
          description: "Umeed is an inspiring series of Olympiads crafted for the children of Pilani in classes 8-10th. It was conducted on 16th November in collaboration with the NSS School Department. This semester, we covered 7 schools namely: Vashishth Pathak Public School, Vijay Public School, Holy Child School, Kids Garden, Hemant Public School and Hanumantpura Gov. School. This semester showed increased participation from the beneficiaries.",
        },
        {
          title: "Coding Classes",
          description: "This initiative is a multi-week learning program in which basics of web development through HTML and CSS is covered. Our volunteers regularly visited Vashishth Pathak School this semester for the classes and students participated with enthusiasm and interest.",
        },
        {
          title: "Seminars",
          description: "This semester our volunteers conducted a seminar on the topic: 'Introduction to AR VR' on 21st October in CEERI Vidya Mandir. It was successfully conducted for over 120+ students",
        },
        {
          title: "School Collab",
          description: "This semester, topics like Factorials, Fibonacci Series, Logical Reasoning were covered for students of classes 6-8th which form the fundamentals of Computers",
        },
        {
          title: "Course in Computer Concepts (CCC)",
          description: "Pitching for a new batch of CCC took place throughout this semester, which is a crucial first step in making this initiative successful. We approached nearby schools and asked if anyone in their staff is interested to enroll in CCC. We have found 4-5 people who are willing to give the exam, and we would begin with their classes next semester.",
        },
        {
          title: "Adult initiative",
          description: "This initiative was conducted in collaboration with HPA with the target of imparting useful technical skills to older women, empowering them to be self-dependent. We taught them to type using text to speech and browse applications like YouTube, opening up new possibilities for digital literacy among an often overlooked demographic.",
        },
      ],
    },
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
                    e.currentTarget.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTlBNEFGIiBmb250LXNpemU9IjI0Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4=';
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
