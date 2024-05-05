import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import { RegisterAPI, LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import linkedInLogo from "../assets/linkedInLogo.png";
import GoogleButton from 'react-google-button'
import '../sass/LoginCompo.scss'

export default function LoginCompo() {
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
    }
    catch (error) {
      toast.error('Signin Failed!');
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
            New to LinkedIn? <span className="join-now">Join now</span>
          </p>
        </div>
      </div>
    </>
  );
}

// export default function loginCompo() {

//   const [credentails, setCredentials] = useState({});
//   const login = async () => {
//         try {
//           let res = await RegisterAPI(credentails.email, credentails.password); // Assuming LoginAPI expects email and password as arguments
//           console.log(res);
//         }
//         catch (error) {
//           console.error('Login failed:', error);
//         }
//   }
//   return(
//     <>
//       <div className="auth-inputs">
//           <input
//             onChange={(event) =>
//               setCredentials({ ...credentails, email: event.target.value })
//             }
//             type="email"
//             className="common-input"
//             placeholder="Email or Phone"
//           />
//           <input
//             onChange={(event) =>
//               setCredentials({ ...credentails, password: event.target.value })
//             }
//             type="password"
//             className="common-input"
//             placeholder="Password"
//           />
//         </div>
//         <button onClick={login} className="login-btn">
//           Sign in
//         </button>
//     </>
//   )
// }
