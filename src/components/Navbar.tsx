
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Franchise', path: '/franchise' },
    { title: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 glass-morphism shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-2xl font-display font-bold tracking-tight relative z-10"
          >
            <div className="h-10 w-10 mr-2">
              <img 
                src="/lovable-uploads/bae17041-2fa0-4a74-bdb6-1325e7c83377.png" 
                alt="Inaaya Healthtech Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-primary animate-fade-in">Inaaya</span>
              <span className="text-secondary animate-fade-in" style={{ animationDelay: '200ms' }}>Healthtech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-all duration-200 animated-underline',
                  location.pathname === link.path
                    ? 'text-primary after:w-full'
                    : 'text-primary/70 hover:text-primary'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                'px-5 py-2 text-sm font-medium transition-all duration-300 rounded-md hover-lift',
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'border border-primary/20 hover:bg-primary hover:text-white'
              )}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 animate-fade-in" />
            ) : (
              <MenuIcon className="w-6 h-6 animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-8 z-0',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'text-xl font-medium transition-all duration-300 animated-underline',
              location.pathname === link.path
                ? 'text-primary after:w-full'
                : 'text-primary/70 hover:text-primary',
              isMobileMenuOpen ? 'animate-slide-up' : 'opacity-0'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {link.title}
          </Link>
        ))}
        <Link
          to="/contact"
          className={cn(
            'mt-4 px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 bg-primary text-white hover:bg-primary/90 hover-lift',
            isMobileMenuOpen ? 'animate-slide-up' : 'opacity-0'
          )}
          style={{ animationDelay: '250ms' }}
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
