import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AboutSection } from "../components/about-section";
import { ActivitiesSection } from "../components/activities-section";
import { ContactSection } from "../components/contact-section";
import { EventsSection } from "../components/events-section";
import { Footer } from "../components/footer";
import Landing from "../components/landing/landing";
import { Navigation } from "../components/navigation";
import { TeamSection } from "../components/team-section";
import { ScrollSmootherProvider } from "../hooks/use-scroll-smoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function Home() {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

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
    // Handle hash navigation on page load
    const hash = location.hash;
    if (hash && smootherRef.current) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const offset = 80; // Account for fixed navbar
          smootherRef.current?.scrollTo(element, true, "top -=" + offset);
        }
      }, 300);
    } else {
      // Restore scroll position when returning to home
      const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
      if (savedScrollPosition) {
        // Small delay to ensure page is loaded
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition),
            behavior: 'auto', // Use 'auto' for immediate positioning
          });
          // Clear the saved position
          sessionStorage.removeItem('homeScrollPosition');
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  useGSAP(() => {
    // Content is at full opacity from the start
    gsap.set(mainContentRef.current, {
      opacity: 1,
    });

    // Create a subtle enhancement when flower stem completes
    // This is purely visual enhancement, not functional gating
    ScrollTrigger.create({
      trigger: landingRef.current,
      start: "170% 20%", // Exactly when stem completes
      toggleActions: "play none none none",
      markers: false,
      onEnter: () => {
        // Subtle "bloom" effect when stem reaches content
        gsap.timeline()
          .to(mainContentRef.current, {
            scale: 1.01,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(mainContentRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
      },
    });

    // Normal scroll-triggered animations for sections
    const sections = gsap.utils.toArray(".content-section");
    sections.forEach((section: any, index) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <ScrollSmootherProvider smootherRef={smootherRef}>
      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id="smooth-content" ref={smoothContentRef}>
          <div className="z-10 relative" ref={landingRef}>
            <Landing />
            <Navigation />
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
  );
}
