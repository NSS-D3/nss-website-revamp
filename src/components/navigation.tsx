import { get } from "http";
import { useMobileMenu } from "../hooks/use-mobile-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";






const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Departments" },
  { href: "#events", label: "Events" },
  { href: "/office-bearers", label: "Office Bearers" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Navigation() {
  const { isOpen, toggle, close } = useMobileMenu();

  

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#od5760] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="/logo/logo.png"
                alt="NSS Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">NSS</h1>
              <p className="text-xs text-white">BITS Pilani</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white  hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden " data-mobile-menu>
            <Sheet open={isOpen} onOpenChange={toggle}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <i className="fill-white fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-1 mt-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={close}
                      className="block px-3 py-3 text-left text-gray-700 hover:text-bits-blue hover:bg-gray-50 rounded-md font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
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
