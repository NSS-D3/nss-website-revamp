import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLocation, useNavigate } from "react-router-dom";
import { useMobileMenu } from "../hooks/use-mobile-menu";
import { useScrollSmoother } from "../hooks/use-scroll-smoother";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

gsap.registerPlugin(ScrollToPlugin);

const navigationLinks = [
  { href: "/", label: "Home", isSection: false },
  { href: "#about", label: "About", isSection: true },
  { href: "#activities", label: "Departments", isSection: true },
  { href: "#events", label: "Events", isSection: true },
  { href: "#team", label: "Team", isSection: true },
  // { href: "/gallery", label: "Gallery", isSection: false },
  { href: "#contact", label: "Contact Us", isSection: true },
];

export function Navigation() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { smootherRef } = useScrollSmoother();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (href: string, isSection: boolean) => {
    if (isSection) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/" + href, { replace: true });
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(href);
        }, 500);
      } else {
        // Already on home page, just scroll directly
        // Do NOT update the URL to prevent triggering useEffect
        scrollToSection(href);
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height

      // Use ScrollSmoother if available, otherwise fallback to GSAP scrollTo
      if (smootherRef?.current) {
        smootherRef.current.scrollTo(element, true);
      } else {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: element,
            // offsetY: offset,
          },
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-[9999] bg-[#0d5756] shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("/", false)}
            className="flex items-center space-x-2 lg:space-x-3 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/logo/logo.png"
                alt="NSS Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                NSS
              </h1>
              <p className="text-xs lg:text-sm text-white/90 group-hover:text-gray-200 transition-colors leading-none">
                BITS Pilani
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href, link.isSection)}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base px-2 py-1 rounded hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden" data-mobile-menu>
            <Sheet open={isOpen} onOpenChange={toggle}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <i className="fas fa-bars text-lg sm:text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col space-y-2 mt-8">
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0d5760]">
                      <img
                        src="/logo/logo.png"
                        alt="NSS Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">NSS</h2>
                      <p className="text-sm text-gray-600">BITS Pilani</p>
                    </div>
                  </div>
                  {navigationLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => {
                        // Close menu first, then navigate/scroll after a delay
                        close();
                        setTimeout(() => {
                          handleLinkClick(link.href, link.isSection);
                        }, 350); // Wait for sheet close animation (300ms) + buffer
                      }}
                      className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200 border border-transparent hover:border-blue-200"
                    >
                      <i
                        className={`fas fa-${
                          link.isSection ? "anchor" : "external-link-alt"
                        } mr-3 text-sm text-gray-500`}
                      ></i>
                      {link.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
