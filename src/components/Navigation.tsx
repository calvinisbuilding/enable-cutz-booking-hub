import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-bebas text-3xl tracking-wide hover:text-accent transition-colors">
            Enable Cutz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-open-sans font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
              <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-open-sans transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2" 
              asChild
            >
              <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
