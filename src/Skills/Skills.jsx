import Buttom from "../components/main/Buttom";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiRedux } from "react-icons/si";

export default function Skillss({ title }) {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <SiRedux /> },
  ];

  return (
    <section>
      <div className="row mx-0 skils_all my-5">
        <Buttom title="Skills" />

        <div className="text-center">
          <div className="col-lg-12 my-5">
            <div className="service-item">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="skill-item"
                >
                  <div className="skill-icon">
                    {skill.icon}  
                  </div>
                  <p className="skill-name mt-2">{skill.name}</p>  
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}