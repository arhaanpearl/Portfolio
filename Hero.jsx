const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 gradient-bg text-white flex items-center bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="bg-black px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                👋 Hello, I'm Yousuf
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software Implementation
              <span className="block text-accent">Specialist</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-lg leading-relaxed">
              With 2+ years of experience in software implementation, currently mastering modern front-end technologies to build exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Work
              </a>
            </div>
            <div className="flex items-center mt-12 space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://w0.peakpx.com/wallpaper/233/89/HD-wallpaper-anime-mo-dao-zu-shi-lan-wangji-lan-zhan-wei-wuxian-wei-ying.jpg" 
                  alt="Yousuf Hossen Nafis" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-2xl -rotate-12 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;