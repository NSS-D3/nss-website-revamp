import gsap from "gsap";
import { ScrollSmoother, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AboutSection } from "../components/about-section";
import { ActivitiesSection } from "../components/activities-section";
import { ContactSection } from "../components/contact-section";
import { EventsSection } from "../components/events-section";
import { Footer } from "../components/footer";
import Landing from "../components/landing/landing";
import { Navigation } from "../components/navigation";
import Preloader from "../components/preloader/Preloader";
import SEO from "../components/SEO";
import { TeamSection } from "../components/team-section";
import { ScrollSmootherProvider } from "../hooks/use-scroll-smoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function Home() {
  // Only show preloader on first visit or page refresh
  const [isPreloading, setIsPreloading] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
    return !hasLoadedBefore;
  });

  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

  const handlePreloadComplete = () => {
    setIsPreloading(false);
    sessionStorage.setItem("hasLoadedBefore", "true");
  };

  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current!,
      content: smoothContentRef.current!,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    smootherRef.current = smoother;

    return () => {
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Handle hash navigation on page load and route changes
    const hash = location.hash;

    if (hash && smootherRef.current) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          const offset = 80; // Account for fixed navbar
          smootherRef.current?.scrollTo(element, true, "top -=" + offset);
        }
      }, 300);
    } else if (location.pathname === "/" && !hash) {
      // Only scroll to top on page refresh/initial load
      // Check if this is a genuine page load (not navigation within SPA)
      const navigationEntries = performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];
      const isPageReload =
        navigationEntries.length > 0 && navigationEntries[0].type === "reload";
      const isInitialLoad = !sessionStorage.getItem("hasVisited");

      if (isPageReload || isInitialLoad) {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }, 100);
        sessionStorage.setItem("hasVisited", "true");
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <SEO 
        title="NSS BITS Pilani - National Service Scheme"
        description="Join NSS BITS Pilani in making a positive impact through community service, education support, health camps, environmental initiatives, and social responsibility programs. Not Me, But You."
      />
      {/* Show preloader only on initial load */}
      {isPreloading && <Preloader onComplete={handlePreloadComplete} />}

      {/* Main content - always rendered but hidden during preload */}
      <div style={{ visibility: isPreloading ? "hidden" : "visible" }}>
        <ScrollSmootherProvider smootherRef={smootherRef}>
          <Navigation />
          <div id="smooth-wrapper" ref={smoothWrapperRef}>
            <div id="smooth-content" ref={smoothContentRef}>
              <div className="z-10 relative" ref={landingRef}>
                <Landing />
              </div>
              <div
                className="min-h-screen bg-gray-50 z-20 relative"
                ref={mainContentRef}
              >
                <div className="content-section">
                  <AboutSection />
                </div>
                <div className="content-section">
                  <ActivitiesSection />
                </div>
                <div className="content-section">
                  <EventsSection />
                </div>
                <div className="content-section">
                  <TeamSection />
                </div>

                <div className="content-section">
                  <ContactSection />
                </div>
                <div className="content-section">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ScrollSmootherProvider>
      </div>
    </>
  );
}
