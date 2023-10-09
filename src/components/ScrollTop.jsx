import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <div className="z-20">
      <ScrollToTop
        smooth
        top="1000"
        viewBox="0 0 256 256"
        className="flex items-center justify-center drop-shadow-lg bg-primary"
      />
    </div>
  );
};

export default ScrollTop;
