import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setShowBackToTop(scrollHeight > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollLink
      to="" // You need to give an id to the element you want to scroll to (e.g., the top of the page).
      smooth={true}
      duration={100}
      spy={true}
      exact="true"
      offset={-80}
      style={{ cursor: "pointer" }}
      onClick={scrollToTop}
    >
      <motion.div>
        <motion.button
          style={{
            position: "fixed",
            bottom: showBackToTop ? "30px" : "100vh",
            right: "50px",
            background: "#ffa903",
            color: "#2a2a2a",
            transition: "bottom 1s ease 1s",
            borderRadius: "6px",
            width: "50px",
            height: "50px",
            zIndex: "10",
            border: "none",
            ":hover": {
              background: "#22092C",
              color: "#fff",
              transition: "background 0.5s",
            },
            "::after": {
              position: "absolute",
              zIndex: -1,
              content: '" "',
              top: "100%",
              left: "5%",
              height: "10px",
              width: "90%",
              opacity: 1,
              background:
                "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 80%)",
            },
          }}
        >
          <ArrowUpward />
        </motion.button>
      </motion.div>
    </ScrollLink>
  );
};

export default BackToTop;
