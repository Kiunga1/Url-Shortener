
import React from 'react';
import FooterSection from './FooterSection';

const Footer = () => {
  const featuresLinks = [
    { label: 'Link Shortening', url: '#' },
    { label: 'Branded Links', url: '#' },
    { label: 'Analytics', url: '#' },
  ];

  const resourcesLinks = [
    { label: 'Blog', url: '#' },
    { label: 'Developers', url: '#' },
    { label: 'Support', url: '#' },
  ];

  const companyLinks = [
    { label: 'About', url: '#' },
    { label: 'Our Team', url: '#' },
    { label: 'Careers', url: '#' },
    { label: 'Contact', url: '#' },
  ];

  return (
    <footer className="group bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col gap-5 items-center md:items-start flex-wrap justify-between md:flex-row ">
        <div className="flex-none">
          <h1 className="font-bold text-3xl mb-4 white">Shortly</h1>
        </div>
        
        <FooterSection title="Features" links={featuresLinks} />
        <FooterSection title="Resources" links={resourcesLinks} />
        <FooterSection title="Company" links={companyLinks} />

        <div className="flex-none">
          <div className="flex">
            <a href="#" className="mr-4"><img src="src\assets\images\icon-facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="mr-4"><img src="src\assets\images\icon-twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#" className="mr-4"><img src="src\assets\images\icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" /></a>
            <a href="#"><img src="src\assets\images\icon-instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

