import { NewsletterSection } from "../components/newsletter-section";
import { AboutSection } from "../components/about-section";
import { ActivitiesSection } from "../components/activities-section";
import { ContactSection } from "../components/contact-section";
import { EventsSection } from "../components/events-section";
import { Footer } from "../components/footer";
import Landing from "../components/landing/landing";
import { TeamSection } from "../components/team-section";
import { Navigation } from "../components/navigation";



export default function Home() {
  return (
    <>
      <div className="z-10 relative">
        <Landing />
        <Navigation/>
      </div>
      <div className="min-h-screen bg-gray-50 z-20 relative">
        <AboutSection />
        <ActivitiesSection />
        <EventsSection />
        <TeamSection />
        <NewsletterSection/>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
