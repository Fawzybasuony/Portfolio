import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <div className="flexx">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
              src="./file.jpg"
              className="avatar"
              alt="My photo"
            />
            <div className="icon-verified"></div>
          </div>
          <div className="right-sectionn ">
            <Lottie
              lottieRef={lottieRef}
              onLoadedImages={() => {
                // @ts-ignore
                // https://lottiereact.com/
                lottieRef.current.setSpeed(0.5);
              }}
              animationData={devAnimation}
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Frontend Developer
        </motion.h1>

        <p className="sub-title">
          I’m Fawzy Basuony, a Frontend Developer with 3+ years of experience building scalable, high-performance web applications using
          React.js and Next.js, with expertise in ERP systems, admin dashboards, e-learning platforms, and AI-integrated
          solutions. Strong in TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, RESTful APIs, and modern frontend
          architecture focused on performance, SEO, and responsive design.
        </p>

        <div className="all-icons flexx">
          <a
            className="icon"
            href="https://www.facebook.com/share/15h8N4N7pR/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="icon"
            href="https://wa.me/201060618915"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp />
          </a>
          <a
            className="icon"
            href="https://github.com/Fawzybasuony?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/fawzy-basuony-0592b32a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>
      {/*  
     <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>  */}
    </section>
  );
};

export default Hero;
