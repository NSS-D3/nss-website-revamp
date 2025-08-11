import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from '../lib/events';
import { BackButton } from '../components/ui/back-button';

type Activity = {
  title: string;
  description: string;
};

export const ConferenciaDeYouth = () => {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const handleContactUsClick = () => {
    navigate('/#contact');
  };
  
  const event = events.find(e => e.title === "Conferencia de Youth");
  if (!event) return <div className="text-center py-20 font-heading">Event not found</div>;

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
    }).filter(act => !["Registration"].includes(act.title));
  };

  const activities = parseActivities(event.content);

  const toggleActivity = (index: number) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('- **') && line.includes('**:')) {
        const parts = line.split('**:');
        const boldPart = parts[0].substring(3);
        const restPart = parts[1];
        return (
          <p key={index} className="mb-2">
            <strong className="text-blue-700">{boldPart}:</strong>
            <span className="text-gray-700">{restPart}</span>
          </p>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-blue-800 mt-4 mb-2">
            {line.substring(4)}
          </h4>
        );
      } else if (line.startsWith('- ')) {
        return (
          <p key={index} className="mb-2 text-gray-700">
            • {line.substring(2)}
          </p>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen font-heading bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/events/soft-texture.png')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-white hover:bg-white/20" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white tracking-tight">
              {event.title}
            </h1>
            <p className="text-2xl italic font-light text-blue-100">
              Empowering Tomorrow's Leaders
            </p>
            <div className="mt-8 h-px w-32 mx-auto bg-white bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-10 rounded-xl shadow-md border border-blue-200/30">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            About the Conference
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
              <div className="prose max-w-none text-blue-800">
                <p className="text-lg mb-6 leading-relaxed">{event.description}</p>
                <div className="bg-blue-100 bg-opacity-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Event Details</h3>
                  <p className="mb-2"><span className="font-medium">Location:</span> {event.location}</p>
                  <p className="mb-2"><span className="font-medium">Date:</span> {event.date.toLocaleDateString()}</p>
                  <p className="mb-2"><span className="font-medium">Theme:</span> Youth as Catalysts for Social Change</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Keynote Speakers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Dr. Priya Nair</h3>
              <p className="text-gray-700">Social entrepreneur and education reformist</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Rajesh Kumar</h3>
              <p className="text-gray-700">Environmental activist and policy maker</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Anita Sharma</h3>
              <p className="text-gray-700">Women empowerment advocate and startup founder</p>
            </div>
          </div>
        </section>

        {/* Conference Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 inline-block px-6 pb-2 border-b-2 border-blue-500">
              Conference Highlights
            </h2>
          </div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-blue-800">{activity.title}</h3>
                  <span className="text-blue-600 text-2xl">
                    {expandedActivity === index ? '−' : '+'}
                  </span>
                </div>
                {expandedActivity === index && (
                  <div className="mt-4 text-gray-700 prose max-w-none">
                    {renderContent(activity.description)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-20 bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            What You'll Gain
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <p className="text-blue-700">Enhanced leadership capabilities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <p className="text-blue-700">Network of social change advocates</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <p className="text-blue-700">Practical tools for community engagement</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <p className="text-blue-700">Action plan for personal social impact project</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-10 rounded-xl border-2 border-blue-300">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Join the Movement</h2>
            <p className="text-lg text-blue-700 mb-6 max-w-2xl mx-auto">
              Be part of the next generation of social change leaders.
            </p>
            <button 
              onClick={handleContactUsClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConferenciaDeYouth;
