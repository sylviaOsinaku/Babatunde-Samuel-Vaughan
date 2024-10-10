import React from "react";
import IconPlay from "../../ui/IconPlay";
import classes from "./Experience.module.css";

function ExperienceCard({ company }) {
  return (
    <div className={classes["expereince-card-container"]}>
      <div className={classes["experience-head-wrapper"]}>
        <h2>
          {company.role}
          <span className={classes["job-name"]}>
            @ <a href="http://">{company.companyName}</a>
          </span>
        </h2>
        <p className={classes["job-date"]}>{company.date}</p>
      </div>
      <div className={classes["experience-text-container"]}>
        {company.jobDone.map((job, index) => (
          <div
            className={classes["experience-text-wrapper"]}
            key={index + "08"}
          >
            <span>
              <IconPlay />
            </span>
            <p>{job}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default ExperienceCard;
