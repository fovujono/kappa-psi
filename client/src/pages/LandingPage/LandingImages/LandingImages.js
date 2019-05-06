import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../LandingImages/LandingImages.css'
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const LandingImages = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div className="image"><img src='/images/1.jpg'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/2.jpeg'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/3.jpg'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/4.jpg'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/5.JPG'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/6.JPG'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/7.JPG'></img>
          </div>
        </div>
        <div className="each-slide">
          <div className="image"><img src='/images/8.jpg'></img>
          </div>
        </div>
      </Slide>
    )
}

export default LandingImages;