import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import linkedInLogo from "../assets/linkedInLogo.png";
import GoogleButton from 'react-google-button';
import '../sass/LoginCompo.scss'

export default function RegisterCompo() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const register = async () => {
      try {
        const res = await RegisterAPI(email, password); // Assuming LoginAPI expects email and password as arguments
        toast.success('Account created!');
        navigate('/login');
      }
      catch (error) {
        toast.error('Cannot create your account!');
      }
    };
  
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  }
  
    return (
      <>
        <div className="login-wrapper">
          <img src={linkedInLogo} className="linkedinLogo" />
          <div className="login-wrapper-inner">
            <h1 className="heading">Make the most of your professional life</h1>
  
            <div className="auth-inputs">
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                className="common-input"
                placeholder="Email or Phone number"
              />
              <br /><br />
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                className="common-input"
                placeholder="Password (6 or more characters)"
              />
            </div>
            <button onClick={register} className="login-btn">
              Agree & Join
            </button>
          </div>
          <hr className="hr-text" data-content="OR" />
          <div className="google-btn-container">
            <GoogleButton
              className="google-btn"
              style={{width: "420px"}}
              onClick={googleSignIn}
            >Continue with Google</GoogleButton>
            <p className="go-to-signup">
              Already on LinkedIn?{" "}
              <span className="join-now"  onClick={() => navigate('/login')}>Sign in</span>
            </p>
          </div>
        </div>
      </>
    );
  }