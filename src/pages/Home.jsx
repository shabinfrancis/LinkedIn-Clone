import React, { useEffect } from "react";
import HomeCompo from '../components/RegisterCompo'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Home() {
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            console.log(res);
        });
    }, []);
    return <HomeCompo />
}