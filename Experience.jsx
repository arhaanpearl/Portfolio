const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Implementation Specialist",
      company: "Continental Technologies (BD) Ltd.",
      period: "2023 - 2025",
      description: "Leading software implementation projects for enterprise clients, ensuring successful deployment and user adoption.",
      responsibilities: [
        "Orchestrated end-to-end ERP system implementations, transforming business processes and driving digital transformation for enterprise clients",
        "Engineered customized software configurations aligned with client operational requirements and business objectives",
        "Spearheaded comprehensive user training programs, significantly enhancing adoption rates and reducing technical errors by 45%",
        "Optimized implementation workflows, accelerating deployment timelines by 30% while maintaining quality standards","Implemented performance monitoring systems that improved operational efficiency by 35% across client organizations","Provided strategic technical guidance during post-implementation phases, ensuring sustained system performance"
      ],
      technologies: ["ERP Implementation" , "System Configuration" , "Process Optimization" , "User Training" , "Performance Enhancement"]
    },
    {
      id: 2,
      title: "Junior Implementation Analyst",
      company: "Continental Technologies (BD) Ltd.",
      period: "2023 - 2025",
      description: "Supported senior specialists in software deployment and client onboarding processes.",
      responsibilities: [
        "Assisted in software configuration and customization based on client needs",
        "Documented client requirements and prepared detailed technical specifications",
        "Provided technical support during the software implementation phase to ensure smooth deployment",
        "Participated in quality assurance testing",
        "Supported software implementation and maintenance to ensure optimal performance",
        "Conducted user training and prepared technical documentation for end-users","Collaborated effectively with team members and clients to deliver successful project outcomes"
      ],
      technologies: ["Technical Documentation", "System Troubleshooting", "IT Support","User Training"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey through software implementation and my transition into modern web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8`}>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-primary font-medium text-lg">{exp.company}</p>
                      <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">{exp.period}</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <i className="fas fa-briefcase text-white"></i>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="flex flex-col items-center">
                  <div className="w-1 h-20 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;