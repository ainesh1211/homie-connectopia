
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/bae17041-2fa0-4a74-bdb6-1325e7c83377.png" 
                alt="Inaaya Healthtech Logo" 
                className="h-10 w-10 mr-2"
              />
              <h3 className="text-xl font-bold">Inaaya Healthtech</h3>
            </div>
            <p className="text-white/70 mb-6">
              Dedicated to developing innovative pharmaceutical solutions that enhance quality of life and address critical healthcare challenges worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {[
                'Antibiotics', 
                'Cardiovascular Medicines', 
                'Diabetes Care', 
                'Respiratory Treatments', 
                'Neurological Solutions'
              ].map((product) => (
                <li key={product}>
                  <Link 
                    to="/products"
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-white/70" />
                <span className="text-white/70">
                  Inaaya Healthtech, Sector 20, Panchkula, Haryana 134109
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white/70" />
                <span className="text-white/70">+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white/70" />
                <a href="mailto:info@inaayahealthtech.com" className="text-white/70 hover:text-white transition-colors duration-200">
                  info@inaayahealthtech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} Inaaya Healthtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
