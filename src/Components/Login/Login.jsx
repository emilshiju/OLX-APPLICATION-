import React, { useState, useContext } from "react";

import { FirebaseContext } from "../../store/firebaseCotext";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import logo from "../../olx-logo.png";
import "./Login.css";
import { useNavigate } from "react-router-dom"


function Logo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase,db } = useContext(FirebaseContext);
  const auth = getAuth();
  let navigate = useNavigate();

  

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
          alert("loged in")
          navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)
      });

  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={logo}></img>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <br />
          <input onChange={(e)=>{setEmail(e.target.value)}} className="input" type="email" id="fname" name="email" />
          <br />
          <label>Password</label>
          <br />
          <input onChange={(e)=>{setPassword(e.target.value)}} className="input" type="password" id="lname" name="password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a>Sign-Up</a>
      </div>
    </div>
  );
}

export default Logo;
