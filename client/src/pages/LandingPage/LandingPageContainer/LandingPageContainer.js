import React from "react";
import "../LandingPageContainer/LandingPageContainer.css"
import SignUpDiv from "../SignUpDiv/SignUpDiv";
import LandingImages from "../LandingImages/LandingImages"



class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="wrapper">

      <div className="landing-jumbo">
        <p><h1>Welcome to the Kappa Psi Messaging App</h1></p>
        <img className="crest" src="/images/kpsi-crest.jpg" alt="kappa-psi-crest"></img>
      </div>

      <div className="carousel-landing">
        <LandingImages />
      </div>

      <div className="landing-jumbo">
        <SignUpDiv />
    </div>
    </div>
    )  
  }
}

export default LandingPageContainer;
