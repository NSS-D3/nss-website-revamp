import { Button } from "./ui/button";

export function Footer() {
  const quickLinks = [
    { href: "#about", label: "About NSS" },
    { href: "#activities", label: "Our Activities" },
    { href: "#events", label: "Upcoming Events" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <i className="fas fa-hands-helping text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">NSS BITS Pilani</h3>
                <p className="text-gray-400 text-sm">National Service Scheme</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering students through community service and social
              responsibility. Join us in making a positive impact on society.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white transition-colors h-8 w-8"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-sm"></i>
                <span className="text-sm">nss@pilani.bits-pilani.ac.in</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-sm"></i>
                <span className="text-sm">+91 1596 242227</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 text-sm mt-1"></i>
                <span className="text-sm">BITS Pilani, Rajasthan 333031</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 NSS BITS Pilani. All rights reserved. | "Not Me, But You"
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button
              onClick={() => (window.location.href = "/unsubscribe")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Unsubscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
