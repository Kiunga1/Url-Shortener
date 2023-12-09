
import React from 'react';

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex-none font-light">
      <h5 className='font-bold text-xl mb-3'>{title}</h5>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a className="hover:text-cyan-500" href={link.url}>{link.label}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
