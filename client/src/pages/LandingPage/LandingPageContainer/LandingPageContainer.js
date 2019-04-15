import React from "react";
import LandingNavBar from "../LandingNavBar/LandingNavBar"
import "../LandingPageContainer/LandingPageContainer.css"

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="wrapper">
    <LandingNavBar />

    <div className="landing-jumbo">
    
      <p>Welcome to the Kappa Psi Messaging App</p>
      <img className="crest" src="/images/kpsi-crest.jpg" alt="kappa-psi-crest"></img>

    
    </div>
      


    </div>
    )  
    }
}

export default LandingPageContainer;
