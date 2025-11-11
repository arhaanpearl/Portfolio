import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Start a Conversation</h3>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">yousufhossennafis@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-phone text-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+880 1313993739</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                  <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'fab fa-linkedin-in', url: '#', color: 'hover:bg-blue-600' },
                  { icon: 'fab fa-github', url: '#', color: 'hover:bg-gray-800' },
                  { icon: 'fab fa-twitter', url: '#', color: 'hover:bg-blue-400' },
                  { icon: 'fab fa-instagram', url: '#', color: 'hover:bg-pink-600' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>


          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
                  placeholder="Tell me about your project or just say hello..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:from-secondary hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;