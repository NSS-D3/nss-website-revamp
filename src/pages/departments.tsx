import SEO from '../components/SEO';
import { BackButton } from "../components/ui/back-button";

export function DepartmentsPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Departments - NSS BITS Pilani" 
        description="Explore the various departments of NSS BITS Pilani." 
      />
      <header className="pt-16 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <BackButton />
          </div>
          <h1 className="text-3xl font-bold text-center">Departments</h1>
        </div>
      </header>
    </div>
  );
}
