import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import Buttom from "./Buttom";

const Main = ({title}) => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <main className=" ">
      {/* button */}

      <Buttom title="My Projects"/>
      {/* All projects */}
      <section className="flex right-section">
        <AnimatePresence>
          {myProjects.map((item) => {
            const isExpanded = item.id ===    expandedId;

            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.id}
                className="card"
              >
                <img
                  width={266}
                  height={200}
                  src={item.imgPath}
                  alt={item.projectTitle}
                />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectTag}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="description"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-link"></div>
                      </a>
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-github"></div>
                      </a>
                    </div>

                    <button
                      className="link flex"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      {isExpanded ? "less" : "more"}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
