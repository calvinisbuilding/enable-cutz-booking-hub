import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bebas text-2xl sm:text-3xl mb-3 sm:mb-4 tracking-wide">Enable Cutz</h3>
            <p className="font-montserrat text-sm opacity-90">
              Premium Grooming & Styling in Smethwick
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-3 sm:mb-4 tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-montserrat text-sm hover:text-accent transition-colors min-h-[32px] flex items-center">
                Home
              </Link>
              <Link to="/services" className="font-montserrat text-sm hover:text-accent transition-colors min-h-[32px] flex items-center">
                Services
              </Link>
              <Link to="/gallery" className="font-montserrat text-sm hover:text-accent transition-colors min-h-[32px] flex items-center">
                Gallery
              </Link>
              <Link to="/contact" className="font-montserrat text-sm hover:text-accent transition-colors min-h-[32px] flex items-center">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-3 sm:mb-4 tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-3 font-montserrat text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>181 Sandon Road, Smethwick, B66 4AA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+447459700262" className="hover:text-accent transition-colors">
                  07459 700262
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:addaebediako7@gmail.com" className="hover:text-accent transition-colors">
                  addaebediako7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="font-montserrat text-xs sm:text-sm opacity-75">
            © {new Date().getFullYear()} Enable Cutz Barbers Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
