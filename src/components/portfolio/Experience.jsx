import React from "react";
import classes from "./Experience.module.css";
import MaterialExperience from "./MaterialExperience";

function Experience() {
  return (
    <div className={classes["experience-container"]} id="experience">
      <div className={classes["about-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <h2>
            {" "}
            <span>02.</span>
            MULTINATIONALS Vaughan HAS WORKED WITH
          </h2>
        </div>
        <div className={classes.horizontalLine}></div>
      </div>

      <MaterialExperience />

      
    </div>
  );
}

export default Experience;
