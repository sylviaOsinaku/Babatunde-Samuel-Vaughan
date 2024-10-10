import React from "react";
import classes from "./About.module.css";
import IconPlay from "../../ui/IconPlay";
import ImageWithBorder from "./ImageWithBoder";

const professionalSkills1 = [
  "People management",
  "Project management",
  "Strategic planning",
];
const professionalSkills2 = [
  "Sales enablement",
  "Employee learning",
  "Employee development",
];
function About() {
  return (
    <div id="about_me" className={classes["about-container"]}>
      <div className={classes["about-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <h2>
            {" "}
            <span>01.</span>About Me
          </h2>
        </div>
        <div className={classes.horizontalLine}></div>
      </div>

      <div className={classes["main-about-container"]}>
        <div className={classes["text-content-wrapper"]}>
          <div className={classes["text-content-main-wrapper"]}>
            <p>
            I am   {" "}
               <span className={classes["text-content-wrapper-aesthetic"]}>
               Babatunde Vaughan, a seasoned Human Capacity Development Expert and Consultant
              </span>{" "}
              with over eight years of experience in strategic program management, talent development, and community engagement. My journey began with a deep passion for education and technology, believing that their intersection could unlock significant potential for underserved communities.
            </p>

            <p>
            With a background in  {" "}
              <span className={classes["text-content-wrapper-aesthetic"]}>
                Philosophy and Public Affairs,
              </span>{" "}
              coupled with certifications in cloud and modern classroom technologies, I transitioned into human capacity development. My focus has been on leveraging technology to empower youth and professionals
            </p>
            <p>
            At Microsoft, I served as a  across  {" "}
              <span className={classes["text-content-wrapper-aesthetic"]}>
              Senior Program Manager for Technology Ecosystem and Partnerships, where I led numerous digital transformation initiatives. My work impacted over 10,000 students and 28,000 educators
              </span>{" "}
              Nigeria, Ghana, and other African nations.
            </p>
            <p>
            I have a proven track record in scaling community-driven initiatives, including launching the first high school internship program in Nigeria. My passion for ecosystem development is rooted in the belief that empowered individuals create empowered communities.
            {" "}     <span className={classes["text-content-wrapper-aesthetic"]}>
              I specialize in fostering collaboration between public and private sectors to create sustainable, scalable programs that enhance career readiness and support community growth
              </span>{" "}
              My goal remains the same: to create opportunities for talent to thrive and ecosystems to flourish.
            </p>
          </div>
          <div className={classes["skills-container"]}>
            <p className={classes["here-skills-container"]}>
              Here are my top skills:
            </p>
            <div className={classes["professional-skills-wrapper"]}>
              <div>
                {professionalSkills1.map((skill, index) => (
                  <div
                    className={classes["skills-wrapper"]}
                    key={index + "skill1"}
                  >
                    <span>
                      <IconPlay />
                    </span>
                    <p className={classes["skills-wrapper-text"]}>{skill}</p>
                  </div>
                ))}
              </div>
              <div>
                {professionalSkills2.map((skill, index) => (
                  <div
                    className={classes["skills-wrapper"]}
                    key={index + "skill2"}
                  >
                    <span>
                      <IconPlay />
                    </span>
                    <p className={classes["skills-wrapper-text"]}>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={classes["about-image-wrapper"]}>
          <ImageWithBorder />
        </div>
      </div>
    </div>
  );
}

export default About;
