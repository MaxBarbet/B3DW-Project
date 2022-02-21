import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";


const ScrollRevealPage = ({ children, style }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay:100,
        distance:'50px',
      });
  }, []);

  return (
    <div
      ref={sectionRef}
    >
      {children}
    </div>
  );
};

export default ScrollRevealPage;
