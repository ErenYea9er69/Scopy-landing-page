import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/assets/logo.png"
                alt="Scopy AI Logo"
                className="h-8 w-8 object-contain brightness-0 invert"
              />
              <span className="text-xl font-semibold text-white">Scopy AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate business coaching tool for entrepreneurs building profitable businesses.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Product",
              links: ["Features", "Solutions", "Pricing", "Templates"]
            },
            {
              title: "Resources",
              links: ["Blog", "Guides", "Webinars", "Community"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Partners"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.toLowerCase() === 'features') {
                          scrollToSection('features');
                        } else if (link.toLowerCase() === 'solutions') {
                          scrollToSection('howitworks');
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2023 Scopy AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;