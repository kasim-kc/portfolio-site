import React, { useState, useEffect } from "react";
import "./CardSection.css";

const CardSection = function ({ smCard, bigCard, data }) {
  const [hasSmallCards, setHasSmallCards] = useState(false);
  const [hasBigCards, setHasBigCards] = useState(false);

  useEffect(() => {
    setHasSmallCards(smCard);
    setHasBigCards(bigCard);
  }, [smCard, bigCard]);

  return (
    <>
      <div className="container">
        {hasSmallCards && (
          <div className="skill-section">
            <h3>Skills</h3>
            {/* {data.skill.map((skill) => {
              <div className="card">
                <div className="logo">
                  <img src={skill.img} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>;
            })} */}
            <div className="card-container">
              <div className="card">
                <div className="logo">
                  <img src="https://placehold.co/50" alt="img" />
                </div>
                <p>REACT.JS</p>
              </div>
              <div className="card">
                <div className="logo">
                  <img src="https://placehold.co/50" alt="img" />
                </div>
                <p>REACT.JS</p>
              </div>
              <div className="card">
                <div className="logo">
                  <img src="https://placehold.co/50" alt="img" />
                </div>
                <p>REACT.JS</p>
              </div>
              <div className="card">
                <div className="logo">
                  <img src="https://placehold.co/50" alt="img" />
                </div>
                <p>REACT.JS</p>
              </div>
            </div>
          </div>
        )}

        {hasBigCards && (
          <div className="projects-section">
            <h3>Projects</h3>
            {/* {data.projects.map((project) => {
              <div className="pj-card">
                <img src={project.img} alt={project.title} />
                <h6>{project.title}</h6>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.stack.map((lang) => {
                    <button>{lang}</button>;
                  })}
                </div>
              </div>;
            })} */}
            <div className="projects-container">
              <div className="pj-card">
                <img src="https://placehold.co/450x160" alt="project-img" />
                <div className="pj-content">
                  <h6>TITLE</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae quibusdam tempora maiores exercitationem quia
                    similique sequi at in officiis dolores assumenda,
                    accusantium minima? Ducimus totam necessitatibus ex commodi
                    ea possimus?
                  </p>
                  <div className="tech-stack">
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                  </div>
                </div>
              </div>
              <div className="pj-card">
                <img src="https://placehold.co/450x160" alt="project-img" />
                <div className="pj-content">
                  <h6>TITLE</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae quibusdam tempora maiores exercitationem quia
                    similique sequi at in officiis dolores assumenda,
                    accusantium minima? Ducimus totam necessitatibus ex commodi
                    ea possimus?
                  </p>
                  <div className="tech-stack">
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                  </div>
                  <div className="pj-links">
                    <a href="#" className="gitHub">
                      Code
                    </a>
                    <a href="#" className="liveLink">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="pj-card">
                <img src="https://placehold.co/450x160" alt="project-img" />
                <div className="pj-content">
                  <h6>TITLE</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae quibusdam tempora maiores exercitationem quia
                    similique sequi at in officiis dolores assumenda,
                    accusantium minima? Ducimus totam necessitatibus ex commodi
                    ea possimus?
                  </p>
                  <div className="tech-stack">
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                    <button>React.js</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardSection;
