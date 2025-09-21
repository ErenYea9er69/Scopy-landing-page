import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-8 px-3">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {[
            {
              title: "COMPANY",
              links: ["About", "Careers", "Press"]
            },
            {
              title: "TECHNOLOGY",
              links: ["Platform", "Process", "Case Studies", "Research"]
            },
            {
              title: "RESOURCES",
              links: ["Blog", "Whitepapers", "Events"]
            },
            {
              title: "LEGAL",
              links: ["Privacy Policy", "Terms of Service", "Field Reports"]
            },
            {
              title: "CONNECT",
              links: ["LinkedIn", "X (Twitter)", "Data Security"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h3 className="text-gray-400 font-medium mb-8 text-xs tracking-wider uppercase">{column.title}</h3>
              <ul className="space-y-5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.toLowerCase() === 'platform') {
                          scrollToSection('features');
                        } else if (link.toLowerCase() === 'process') {
                          scrollToSection('howitworks');
                        }
                      }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;