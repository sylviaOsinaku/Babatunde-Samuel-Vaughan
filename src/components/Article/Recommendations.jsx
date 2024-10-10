import React, { useState, useEffect } from 'react';
import classes from './Recommendations.module.css';
import babaT from '../../assests/images/BabaT-10.jpg';
 import test1 from '../../assests/images/tes-1.jpg'
function Recommendations() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile view if screen is 768px or smaller
    };
    
    handleResize(); // Call on initial load
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const testimonials = [
    {
      name: "John Igwe",
      testimony: "Babatunde’s passion for improving people and communities shines through. His expertise in tech, social development, and innovation makes him a strategic thinker and a valuable asset to any organization or team.",
      profileImage: "../../assests/images/tes-1.jpg",
      role:"Product Manager, Microsoft "
    },
    {
      name: "Olagoke Majekodunmi",
      testimony: "Babatunde is goal-driven and persistent. He excels as a program manager with strong communication, team-building, and problem-solving abilities. He tackles ambitious challenges with unwavering determination.",
      profileImage: "../../assests/images/tes-2.jpg",
      role:"Data Analyst, Microsoft "
    },
    {
      name: "Stephen Ebichondo",
      testimony: "Babatunde delivers under pressure and excels in demanding situations. His creativity, strong work ethic, and commitment make him a reliable professional in the IT industry, always achieving high-impact results.",
      profileImage: "../../assests/images/tes-3.jpg"
  ,
      role:"Senior Service Engineer, Microsoft "
    },
    {
      name: "Amos Gabriel",
      testimony: "Babatunde’s integrity, leadership, and emotional intelligence are exemplary. He is purpose-driven, focused, and brings contagious positivity to his work. His competence and professionalism are outstanding in all his endeavors.",
      profileImage: "../../assests/images/tes-4.jpg",
      role:"Youth life coach, Change Management "
    },
    {
      name: "Ayodele Odeogbola, M.A",
      testimony: "Babatunde is a goal-oriented team player with excellent communication, negotiation, and leadership skills. His work in teacher engagement and technology integration at Microsoft Education has left a lasting, scalable impact.",
      profileImage: "../../assests/images/tes-5.jpg"
      ,
      role:"Co-founder, TedPrime "
    }
  ];

  const slideLength = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  return (
    <div className={classes['recommendation-container']} id='reccomendations'>
      <div className={classes["about-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <h2><span>03.</span>Recommendations</h2>
        </div>
        <div className={classes.horizontalLine}></div>
      </div>

      <h3>Voices of Impact: Community Reflections on Babatunde Vaughan's Leadership</h3>
      
      {/* Conditionally render slider for mobile screens */}
      {isMobile ? (
        <div className={classes["slider"]}>
          <button className={classes["prev-btn"]} onClick={prevSlide}>←</button>
          
          
          {testimonials.map((tes, index) => (
            <div 
              className={`${index === currentSlide ? classes['active'] : ''} ${classes['slide']}` }
              key={"tes" + index}
              style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
            >
              <div className={classes['testimony-wrapper']}>
              <p className={classes['main-text']}>{tes.testimony}</p>
              <div className={classes['profile-wrapper']}>
                <img src={tes.profileImage} alt="Profile" />
                <div>
                  <h4>{tes.name}</h4> 
                  <p>{tes.role}</p>
                </div>
              </div>
              </div>
           
            </div>
          ))}
          <button className={classes["next-btn"]} onClick={nextSlide}>→</button>
        </div>
      ) : (
        <div className={classes["tes-container"]}>
          {testimonials.map((tes, index) => (
            <div className={classes['testimony-wrapper']} key={"tes" + index}>
              <p className={classes['main-text']}>{tes.testimony}</p>
              <div className={classes['profile-wrapper']}>
                <img src={tes.profileImage} alt="Profile" />
                <div>
                  <h4>{tes.name}</h4> 
                  <p>{tes.role}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recommendations;
