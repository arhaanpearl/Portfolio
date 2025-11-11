const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses to track sales, customer behavior, and inventory in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Chart.js", "Tailwind CSS", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Firebase", "Material UI", "Context API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills in front-end development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg card-hover ${
              project.featured ? 'lg:col-span-2' : ''
            }`}>
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                    <a href={project.githubUrl} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors">
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a href={project.liveUrl} className="text-primary font-semibold hover:text-secondary transition-colors flex items-center">
                    View Project
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                  <div className="flex space-x-3 text-gray-400">
                    <a href={project.githubUrl} className="hover:text-gray-600 transition-colors">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href={project.liveUrl} className="hover:text-gray-600 transition-colors">
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center bg-primary text-black
           px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105">
            View All Projects
            <i className="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;