import React from "react";
import { Fade } from "react-slideshow-image";
import "../LandingImages/LandingImages.css";

const fadeProperties = {
  duration: 3000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true
};

const LandingImages = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image">
          <img src="/images/1.jpg" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/2.jpeg" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/3.jpg" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/4.jpg" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/5.JPG" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/6.JPG" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/7.JPG" alt="kappa-psi-members" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image">
          <img src="/images/8.jpg" alt="kappa-psi-members" />
        </div>
      </div>
    </Fade>
  );
};

export default LandingImages;
