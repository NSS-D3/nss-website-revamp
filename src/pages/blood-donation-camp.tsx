import { useState } from 'react';
import { events } from '../lib/events';
import { BackButton } from '../components/ui/back-button';

type Activity = {
  title: string;
  description: string;
};

export const BloodDonationCamp = () => {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  const event = events.find(e => e.title === "Blood Donation Camp");
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
    }).filter(act => !["Schedule"].includes(act.title));
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
            <strong className="text-red-700">{boldPart}:</strong>
            <span className="text-gray-700">{restPart}</span>
          </p>
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
    <div className="min-h-screen font-heading bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/events/soft-texture.png')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-white hover:bg-white/20" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white tracking-tight">
              {event.title}
            </h1>
            <p className="text-2xl italic font-light text-red-100">
              Gift of Life - Donate Blood, Save Lives
            </p>
            <div className="mt-8 h-px w-32 mx-auto bg-white bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-10 rounded-xl shadow-md border border-red-200/30">
          <h2 className="text-3xl font-semibold text-red-800 mb-8 text-center">
            About the Blood Donation Camp
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
              <div className="prose max-w-none text-red-800">
                <p className="text-lg mb-6 leading-relaxed">{event.description}</p>
                <div className="bg-red-100 bg-opacity-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Event Details</h3>
                  <p className="mb-2"><span className="font-medium">Location:</span> {event.location}</p>
                  <p className="mb-2"><span className="font-medium">Date:</span> {event.date.toLocaleDateString()}</p>
                  <p className="mb-2"><span className="font-medium">Target:</span> 200+ units of blood collection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Safety */}
        <section className="mb-20 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-red-800 mb-8 text-center">
            Eligibility & Safety
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Age: 18-65 years</li>
                <li>• Weight: Minimum 50 kg</li>
                <li>• Good general health condition</li>
                <li>• Valid ID proof required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Safety Measures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sterile, single-use equipment only</li>
                <li>• Pre-donation health screening</li>
                <li>• Post-donation care and refreshments</li>
                <li>• Medical assistance throughout</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-red-800 inline-block px-6 pb-2 border-b-2 border-red-500">
              Event Highlights
            </h2>
          </div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-red-800">{activity.title}</h3>
                  <span className="text-red-600 text-2xl">
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

        {/* Impact Stats */}
        <section className="mb-20 bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-xl">
          <h2 className="text-3xl font-semibold text-red-800 mb-8 text-center">
            Expected Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
              <div className="text-red-700">Units of Blood</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">600+</div>
              <div className="text-red-700">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-red-700">Safe & Sterile</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 p-10 rounded-xl border-2 border-red-300">
            <h2 className="text-3xl font-semibold text-red-800 mb-4">Be a Hero</h2>
            <p className="text-lg text-red-700 mb-6 max-w-2xl mx-auto">
              Register now and be a hero in someone's story. Every donation counts!
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              Register to Donate
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BloodDonationCamp;
