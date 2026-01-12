import { useLocation, useNavigate } from "react-router-dom";
import { useMobileMenu } from "../hooks/use-mobile-menu";
import { useScrollSmoother } from "../hooks/use-scroll-smoother";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";

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

      // Use ScrollSmoother if available, otherwise fallback to native scroll
      if (smootherRef?.current) {
        smootherRef.current.scrollTo(element, true);
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/logo/logo.png"
                alt="NSS Logo"
                className="w-full h-full object-contain"
              />
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
            <Button
              className="bg-white text-[#0D5760] hover:bg-gray-100 font-bold ml-4"
              onClick={() => handleLinkClick("/sponsors", false)}
            >
              Our Sponsors
            </Button>
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
                <div className="sr-only">
                  <SheetTitle>Mobile Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Navigation links for accessing different sections of the website.
                  </SheetDescription>
                </div>
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
                  <button
                    onClick={() => {
                      close();
                      setTimeout(() => {
                        handleLinkClick("/sponsors", false);
                      }, 350);
                    }}
                    className="block w-full px-4 py-3 text-left bg-[#0d5760] text-white hover:bg-[#093f3e] rounded-lg font-bold transition-colors duration-200 mt-4"
                  >
                    <i className="fas fa-heart mr-3 text-sm"></i>
                    Our Sponsors
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
