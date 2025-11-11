const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate software professional with expertise in implementation and a growing love for front-end development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm <span className="font-semibold text-primary">Yousuf Hossen Nafis</span>, a dedicated software professional with over 2 years of hands-on experience in software implementation teams. My journey began with understanding complex client requirements and delivering tailored software solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My implementation background has equipped me with strong problem-solving skills, excellent client communication abilities, and a deep understanding of software deployment lifecycles.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently, I'm expanding my expertise in modern front-end technologies including <span className="font-semibold">React.js, JavaScript ES6+, and Tailwind CSS</span> to create intuitive and responsive user interfaces.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-code text-primary text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold">Clean Code</div>
                  <div className="text-sm text-gray-400">Quality First</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-lightbulb text-accent text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold">Problem Solver</div>
                  <div className="text-sm text-gray-400">Creative Solutions</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow shadow-gray-400 text-white">
            <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Full Name</span>
                <span>Yousuf Hossen Nafis</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Experience</span>
                <span>2+ Years</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Specialization</span>
                <span>Implementation & Frontend</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Location</span>
                <span>Narayanganj,Dhaka</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email</span>
                <span>yousufhossennafis@gmail.com</span>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center justify-center w-full mt-8 bg-white text-gray-400 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;