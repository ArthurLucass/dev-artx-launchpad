
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">
            Dev
            <span className="relative">
              Artx
              <span className="absolute -bottom-1 left-0 w-full h-1 gradient-bg rounded-full"></span>
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-secondary hover:text-brand-blue transition-colors">{translations.header.services}</a>
          <a href="#process" className="text-secondary hover:text-brand-blue transition-colors">{translations.header.process}</a>
          <a href="#testimonials" className="text-secondary hover:text-brand-blue transition-colors">{translations.header.testimonials}</a>
          <a href="#faq" className="text-secondary hover:text-brand-blue transition-colors">{translations.header.faq}</a>
          <LanguageToggle />
          <Button asChild className="btn-primary">
            <a href="#contact">{translations.header.getStarted}</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <button 
            className="text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#services" className="text-secondary hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{translations.header.services}</a>
              <a href="#process" className="text-secondary hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{translations.header.process}</a>
              <a href="#testimonials" className="text-secondary hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{translations.header.testimonials}</a>
              <a href="#faq" className="text-secondary hover:text-brand-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{translations.header.faq}</a>
              <Button asChild className="btn-primary w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{translations.header.getStarted}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
