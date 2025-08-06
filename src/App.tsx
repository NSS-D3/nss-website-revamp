import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/home";
import { queryClient } from "./lib/queryClient";
import { DepartmentsPage } from "./pages/departments";
import { EventsPage } from "./pages/events";
import { OfficeBearersPage } from "./pages/office-bearers";
import { NewsletterPage } from "./pages/newsletter";
import { GalleryPage } from "./pages/gallery";
import  { School } from "./components/DepartmentPages/school";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/office-bearers" element={<OfficeBearersPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
         
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
