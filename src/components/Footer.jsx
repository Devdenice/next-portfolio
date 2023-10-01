import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="z-10 footer border border-t-[#33553f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">All rights reserved {currentYear}.</p>
      </div>
    </footer>
  );
};

export default Footer;
