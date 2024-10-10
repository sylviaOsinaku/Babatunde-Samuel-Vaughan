import React, { useState } from "react";
import styles from "./ImageWithBorder.module.css";
import profilepicture from "../../assests/images/Baba-T-profile.jpg";
const ImageWithBorder = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.imageContainer} ${hovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.overlay}></div>
        <img src={profilepicture} alt="Description" className={styles.image} />
      </div>
    </div>
  );
};

export default ImageWithBorder;
