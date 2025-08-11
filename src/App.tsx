import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { DepartmentsPage } from "./pages/departments";
import Home from "./pages/home";

import { OfficeBearersPage } from "./pages/office-bearers";

import { ComputerLiteracyProgramme } from "./pages/clp";
import { DesignDevelopment } from "./pages/d3";
import { SponsorshipCollaboration } from "./pages/departmentofsponsorshipandcollaboration";
import { Events } from "./pages/events";
import { GalleryPage } from "./pages/gallery";
import { HealthPublicAwareness } from "./pages/healthpublicawareness";
import { Parisodh } from "./pages/parisodh";
import { School } from "./pages/school";
import { Umang } from "./pages/umang";
import BloodDonationCamp from "./pages/blood-donation-camp";
import ConferenciaDeYouth from "./pages/conferencia-de-youth";
import Junoon from "./pages/junoon";
import ShopForSmile from "./pages/shop-for-smile";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentsPage />} />

          <Route path="/office-bearers" element={<OfficeBearersPage />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/school" element={<School />} />
          <Route path="/umang" element={<Umang />} />
          <Route path="/parisodh" element={<Parisodh />} />
          <Route
            path="/health-public-awareness"
            element={<HealthPublicAwareness />}
          />
          <Route
            path="/department-of-sponsorship-and-collaboration"
            element={<SponsorshipCollaboration />}
          />
          <Route
            path="/department-of-design-and-development"
            element={<DesignDevelopment />}
          />
          <Route
            path="/computer-literacy-programme"
            element={<ComputerLiteracyProgramme />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/junoon" element={<Junoon />} />
          <Route path="/shop-for-smile" element={<ShopForSmile />} />
          <Route path="/blood-donation-camp" element={<BloodDonationCamp />} />
          <Route
            path="/conferencia-de-youth"
            element={<ConferenciaDeYouth />}
          />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
