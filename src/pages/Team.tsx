import SEO from "../components/SEO";
import { BackButton } from "../components/ui/back-button";
import { TeamSection } from "../components/team-section";

export default function TeamPage() {
  return (
    <div className="min-h-screen font-heading bg-[#bdaeedff]">
      <SEO
        title="Our Team - NSS BITS Pilani"
        description="Meet the dedicated team members who lead NSS BITS Pilani and drive social impact."
      />

      {}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton
              variant="ghost"
              className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]"
            />
          </div>

    
        </div>
      </header>

      {}
      <main className="pt-8">
        <TeamSection />
      </main>
    </div>
  );
}
