import React from "react";
import classes from "./ImageGallery.module.css";

const images = [
  "../../assests/images/BabaT-1.jpg",
  "../../assests/images/BabaT-2.jpg",
  "../../assests/images/BabaT-3.jpg",
  "../../assests/images/BabaT-4.jpg",
  "../../assests/images/BabaT-5.jpg",
  "../../assests/images/BabaT-6.jpg",
  "../../assests/images/BabaT-7.jpg",
  "../../assests/images/BabaT-8.jpg",
  "../../assests/images/BabaT-9.jpg",
  "../../assests/images/BabaT-10.jpg",
  "../../assests/images/BabaT-11.jpg",
  "../../assests/images/BabaT-12.jpg",
  "../../assests/images/BabaT-13.jpg",
  "../../assests/images/BabaT-14.jpg",
  "../../assests/images/BabaT-15.jpg",
];

const ImageGallery = () => {
  return (
    <div className={classes["image-wrapper"]}>
      <div className={classes.mainContainer}>
        <div className={classes.slider}>
          <div className={classes.slideTrack}>
            {images.map((src, index) => (
              <div className={classes.slide} key={index}>
                <img src={src} alt={`Microsoft work ${index + 1}`} />
              </div>
            ))}
            {images.map((src, index) => (
              <div className={classes.slide} key={index + images.length}>
                <img src={src} alt={`Microsoft work duplicate ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
