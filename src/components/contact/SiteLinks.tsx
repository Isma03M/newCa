import React from 'react';

const SiteLinks = () => {
  return (
    <div>
      <h2 className="heading-secondary text-2xl font-serif mb-4 text-white">SITE LINKS</h2>
      <div className="w-24 h-0.5 bg-[#C5B358] mb-6"></div>
      <nav className="heading-secondary space-y-4">
        {[
          { label: "HOME", link: "/" },
          { label: "ABOUT", link: "/about" },
          { label: "TEAM", link: "/team" },
          { label: "SPONSORS", link: "/sponsors" },
          { label: "FACILITIES", link: "/facilities" },
          { label: "SALES", link: "/sales" },
          { label: "SALES HORSES", link: "/sales-horses" },
          { label: "NEWS", link: "/news" },
          { label: "CONTACT", link: "/contact" }
        ].map(({ label, link }) => (
          <div key={label} className="text-center">
            <a
              href={link}
              className="block text-white hover:text-[#C5B358] transition-colors"
            >
              {label}
            </a>
            <div className="w-30 border-b-2 border-dotted border-white mx-auto mt-1"></div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SiteLinks;
