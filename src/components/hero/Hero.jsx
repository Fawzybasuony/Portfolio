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
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/public/file.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
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
          I’m Fawzy Basuony, a Frontend Developer based in Cairo. I transform
          ideas into interactive digital experiences using React.js and Next.js.
          Passionate about building smooth, engaging interfaces and optimizing
          performance. Always eager for new challenges to grow and deliver
          innovative solutions.
        </p>

        <div className="all-icons flex">
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
      </div>
    </section>
  );
};

export default Hero;
