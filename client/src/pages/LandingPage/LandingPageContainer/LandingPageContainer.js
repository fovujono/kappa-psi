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

      <div className="container">
      <div>
        <form className='login-form'>
          <h2>Log-In</h2>

          Username: 
          <input type="text" name="username" placeholder="ilovekappapsi"></input>
          <br></br>
          <br></br>
          Password: 
          <input type="text" name="password" placeholder="******"></input>
          <p className="register-link">Don't have an account: <a href="#">create one</a></p>
        </form>

    </div>
      </div>
    </div>
    )  
    }
}

export default LandingPageContainer;
