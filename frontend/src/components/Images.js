import React, { useState, useEffect } from "react";
import "../css/Images.css";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";

export default function Images() {
  
  const [imageSrc, setImageSrc] = useState(img1);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc(images[(images.indexOf(imageSrc) + 1) % images.length]);
    }, 1500);
    return () => clearInterval(interval);
  }, [imageSrc, images]);

  return (
    <div className="div">
      <img className="img" src={imageSrc} alt="demoimg" />
    </div>
  );
}
