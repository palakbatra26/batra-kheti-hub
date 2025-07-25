
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold">Batra Kheti Centre</h1>
              <p className="text-green-100 text-sm">Serving since 31 April 2013</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home"
              onClick={() => scrollToSection('home')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#founders"
              onClick={() => scrollToSection('founders')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a 
              href="#services"
              onClick={() => scrollToSection('services')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#products"
              onClick={() => scrollToSection('products')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Our Products
            </a>
            <a 
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-500">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-green-200 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#founders"
                onClick={() => scrollToSection('founders')}
                className="text-left hover:text-green-200 transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a 
                href="#services"
                onClick={() => scrollToSection('services')}
                className="text-left hover:text-green-200 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#products"
                onClick={() => scrollToSection('products')}
                className="text-left hover:text-green-200 transition-colors cursor-pointer"
              >
                Our Products
              </a>
              <a 
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-green-200 transition-colors cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
