import React from "react";
import classes from "./Intro.module.css";
function Intro() {
  return (
    <div className={classes["intro-container"]}>
      <h1>
        {" "}
        <span>Human Capacity</span> Development
        <br /> expert and Consultant
      </h1>
      <p>
        Results-driven leader with 15+ years in education policy, digital
        transformation, and non-profit management. Committed to shared
        prosperity in Africa and mentoring future leaders, with a strong focus
        on diversity, equity, and inclusion.
      </p>
    </div>
  );
}

export default Intro;
