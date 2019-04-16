import React from "react";
import "../LandingPageContainer/LandingPageContainer.css"

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
          </form>
        </div>
      </div>
    </div>
    )  
  }
}

export default LandingPageContainer;
