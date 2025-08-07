import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/home";
import { queryClient } from "./lib/queryClient";
import { DepartmentsPage } from "./pages/departments";

import { OfficeBearersPage } from "./pages/office-bearers";
import { NewsletterPage } from "./pages/newsletter";
import { GalleryPage } from "./pages/gallery";
import {School} from "./pages/school"
import {Umang} from "./pages/umang";
import {Parisodh} from "./pages/parisodh";
import {HealthPublicAwareness} from "./pages/healthpublicawareness";
import {SponsorshipCollaboration} from "./pages/departmentofsponsorshipandcollaboration";
import {DesignDevelopment} from "./pages/d3";
import {ComputerLiteracyProgramme} from "./pages/clp";
import {Events} from "./pages/events";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          
          <Route path="/office-bearers" element={<OfficeBearersPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/school" element={<School />} />
          <Route path="/umang" element={<Umang />} />
          <Route path="/parisodh" element={<Parisodh />} />
          <Route path="/health-public-awareness" element={<HealthPublicAwareness />} />
          <Route path="/department-of-sponsorship-and-collaboration" element={<SponsorshipCollaboration />} />
          <Route path="/department-of-design-and-development" element={<DesignDevelopment />} />
          <Route path="/computer-literacy-programme" element={<ComputerLiteracyProgramme />} />
          <Route path="/events" element={<Events />} />
         
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
