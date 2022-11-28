import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CV from '../assets/docs/Jefferson Muigai Resume.pdf';

const CTA = ({ setSelectedPage }) => {
  return (
    <div className="flex justify-center gap-5 mt-20">
      <a
        href={CV}
        download
        className="py-2 px-4 border border-abbey text-abbey hover:text-ebonyClay hover:bg-abbey rounded-md"
      >
        Download CV
      </a>

      <AnchorLink
        href="#contact"
        className="py-2 px-4 bg-abbey border border-abbey text-ebonyClay hover:text-abbey hover:bg-transparent rounded-md"
        onClick={() => setSelectedPage('contact')}
      >
        Let's talk
      </AnchorLink>
    </div>
  );
};

export default CTA;
