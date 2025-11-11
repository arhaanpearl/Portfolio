const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Yousuf Hossen Nafis</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Implementation Specialist & Front-End Developer passionate about creating digital solutions that make a difference.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: 'fab fa-linkedin-in', url: '#' },
                { icon: 'fab fa-github', url: '#' },
                { icon: 'fab fa-twitter', url: '#' },
                { icon: 'fas fa-envelope', url: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <p className="text-gray-400">Let's build something amazing together</p>
          </div>
          
          <div className="text-right">
            <a 
              href="#home" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <i className="fas fa-arrow-up mr-2 group-hover:-translate-y-1 transition-transform"></i>
              Back to Top
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Yousuf Hossen Nafis. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;