import React from "react";
import "../LandingPageContainer/LandingPageContainer.css";
import SignUpDiv from "../SignUpDiv/SignUpDiv";
import LandingImages from "../LandingImages/LandingImages";
// import SignUpModal from "../SignUpModal/SignUpModal";

class LandingPageContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="wrapper">
        <div className="landing-jumbo">
          <h1 id="title">Kappa Psi Messaging App</h1>
        </div>

        <div className="carousel-landing">
          <LandingImages />
        </div>

        <div className="sign-up-div">

          <SignUpDiv  />
        </div>

        <div className="sign-up-modal-button" />
      </div>
    );
  }
}

export default LandingPageContainer;
