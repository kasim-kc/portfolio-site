import React, { useState, useEffect } from "react";
import portfolioData from "../constants/data";
import "./CardSection.css";

const CardSection = function ({ smCard, bigCard }) {
  const [hasSmallCards, setHasSmallCards] = useState(false);
  const [hasBigCards, setHasBigCards] = useState(false);

  const data = portfolioData;

  useEffect(() => {
    setHasSmallCards(smCard);
    setHasBigCards(bigCard);
  }, [smCard, bigCard]);

  return (
    <>
      <div className="container">
        {hasSmallCards && (
          <div className="skill-section">
            <h3>| Skills</h3>
            <div className="card-container">
              {data.skills.map((skill) => {
                return (
                  <div className="card" key={skill.id}>
                    <div className="logo">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {hasBigCards && (
          <div className="projects-section">
            <h3>| Projects</h3>
            <div className="projects-container">
              {data.projects.map((project) => {
                return (
                  <div className="pj-card" key={project.id}>
                    <img src={project.img} alt={project.title} />
                    <div className="pj-content">
                      <h6>{project.title}</h6>
                      <p>{project.description}</p>
                      <div className="link-container">
                        <div className="tech-stack">
                          {project.techStack.map((lang, idx) => {
                            return <button key={idx + 1}>{lang}</button>;
                          })}
                        </div>
                        <div className="pj-links">
                          <a href={project.github} target="_blank">
                            <i class="fa-brands fa-github"></i> Code
                          </a>
                          <a href={project.demo} target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardSection;
