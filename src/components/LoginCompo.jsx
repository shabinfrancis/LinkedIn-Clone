import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import linkedInLogo from "../assets/linkedInLogo.png";
import GoogleButton from 'react-google-button';
import '../sass/LoginCompo.scss';

export default function LoginCompo() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    try {
      const res = await LoginAPI(email, password); // Assuming LoginAPI expects email and password as arguments
      toast.success('Signed In to LinkedIn!');
      navigate("/home");
    }
    catch (error) {
      toast.error('Signin Failed!');
    }
  };

const googleSignIn = () => {
  let response = GoogleSignInAPI();
  navigate("/home");
}

  return (
    <>
      <div className="login-wrapper">
        <img src={linkedInLogo} className="linkedinLogo" />
        <div className="login-wrapper-inner">
          <h1 className="heading">Sign in</h1>
          <p className="para">Stay updated on your professional world</p>

          <div className="auth-inputs">
            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              className="common-input"
              placeholder="Email or Phone"
            />
            <br /><br />
            <input
              onChange={handlePasswordChange}
              value={password}
              type="password"
              className="common-input"
              placeholder="Password"
            />
          </div>
          <button onClick={login} className="login-btn">
            Sign in
          </button>
        </div>
        <hr className="hr-text" data-content="OR" />
        <div className="google-btn-container">
          <GoogleButton
            className="google-btn"
            style={{width: "420px"}}
            onClick={googleSignIn}
          />
          <p className="go-to-signup">
            New to LinkedIn?
            <span className="join-now"  onClick={() => navigate('/register')}>Join now</span>
          </p>
        </div>
      </div>
    </>
  );
}