import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-4">Enable Cutz</h3>
            <p className="font-open-sans text-sm opacity-90">
              Premium Grooming & Styling in Smethwick
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-open-sans text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/services" className="font-open-sans text-sm hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="font-open-sans text-sm hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="font-open-sans text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 font-open-sans text-sm">
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-open-sans text-sm opacity-75">
            © {new Date().getFullYear()} Enable Cutz Barbers Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
