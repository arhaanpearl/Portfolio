import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">Yousuf Hossen Nafis</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">Home</a>
          <a href="#about" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">About</a>
          <a href="#experience" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">Experience</a>
          <a href="#skills" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">Skills</a>
          <a href="#projects" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">Projects</a>
          <a href="#contact" className="nav-link text-gray-700 hover:text-primary font-medium hover:text-blue-400">Contact</a>
        </div>

        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;