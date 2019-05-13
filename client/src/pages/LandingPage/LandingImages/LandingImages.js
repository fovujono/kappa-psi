import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../LandingImages/LandingImages.css'
 
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 800,
  infinite: false,
  indicators: true,
  arrows: true
}

const LandingImages = () => {
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image"><img src='/images/1.jpg'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/2.jpeg'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/3.jpg'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/4.jpg'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/5.JPG'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/6.JPG'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/7.JPG'></img>
          </div>
        </div>
        <div className="each-fade">
          <div className="image"><img src='/images/8.jpg'></img>
          </div>
        </div>
      </Fade>
    )
}

export default LandingImages;