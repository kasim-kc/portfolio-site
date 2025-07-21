import React, { useState, useEffect } from "react";
import portfolioData from "../constants/data";
import "./DescSection.css";

const DescSection = ({ descPresent, education }) => {
  const [isDescPresent, setIsDescPresent] = useState(false);
  const [isEducation, setIsEducation] = useState(false);

  const data = portfolioData;

  useEffect(() => {
    setIsDescPresent(descPresent);
    setIsEducation(education);
  }, [descPresent, education]);

  return (
    <>
      <div className="container">
        {isDescPresent && (
          <>
            <h3>| Objective</h3>
            <article>{data.objective}</article>
          </>
        )}
        {isEducation && (
          <>
            <h3>| Education</h3>
            {data.education.map((card) => {
              console.log(card);
              <div className="edu-card">
                <h6>{card.course}</h6>
                <p>{card.institution}</p>
                <p>
                  {card.duration} | {card.result}
                </p>
              </div>;
            })}
          </>
        )}
      </div>

      {}
    </>
  );
};

export default DescSection;
