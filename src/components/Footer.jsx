import Image from "next/image";
import React from "react";
import footerLogo from "../../public/images/D-Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="z-10 footer border border-t-[#33553f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image className="w-8" src={footerLogo} alt="Logo" />
        </span>
        <p className="text-slate-600">All rights reserved {currentYear}.</p>
      </div>
    </footer>
  );
};

export default Footer;
