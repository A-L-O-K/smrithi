import React from 'react';
import './SignUp.css'; // Import the CSS file

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="text-pink-300 text-3xl font-bold mb-10">Sign Up</h1>
        <div className="signup-input">
          <input type="text" placeholder="USERNAME" />
        </div>
        <div className="signup-input">
          <input type="password" placeholder="PASSWORD" />
        </div>
        {/* age ,gmail,  */}
        <div className="signup-input">
          <input type="text" placeholder="AGE" /> 
        </div>
        <div className="signup-input">
          <input type="text" placeholder="GMAIL" />
        </div>


        <button className="signup-button">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUp;
