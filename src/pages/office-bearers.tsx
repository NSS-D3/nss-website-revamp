import SEO from '../components/SEO';
import { BackButton } from "../components/ui/back-button";

export function OfficeBearersPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Office Bearers - NSS BITS Pilani" 
        description="Meet the team leading NSS BITS Pilani." 
      />
      <header className="pt-16 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <BackButton />
          </div>
          <h1 className="text-3xl font-bold text-center">Office Bearers</h1>
        </div>
      </header>
    </div>
  );
}
