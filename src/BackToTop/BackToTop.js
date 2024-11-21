import React, { useEffect, useState } from "react";
import "./BackToTop.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button
          className="backCss"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "35px",
            height: "50px",
            width: "50px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            background: "#2e8b57",
            borderRadius: "50%",
            border: "none",
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={scrollUp}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
