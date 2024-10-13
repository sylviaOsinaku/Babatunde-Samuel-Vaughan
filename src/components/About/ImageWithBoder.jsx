import React, { useState } from "react";
import styles from "./ImageWithBorder.module.css";
import profilepicture from "../../assests/images/Baba-T-profile.jpg";
const ImageWithBorder = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.imageContainer}`}
     
    >
      <div className={styles.imageWrapper}>
       
        <img src={profilepicture} alt="Description" className={styles.image} />
      </div>
    </div>
  );
};

export default ImageWithBorder;
