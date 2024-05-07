import React, { useState, useEffect } from "react";
import LoginCompo from "../components/LoginCompo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

export default function Login() {
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res.accessToken) {
        navigate('/home');
      }
      else {
        setLoading(false);
      };
    });
  }, []);
  return loading ? <Loader /> : <LoginCompo />


}