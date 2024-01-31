import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/firebaseCotext";

import { useNavigate } from "react-router-dom";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { firebase, db } = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(firebase);

    try {
      let res = createUserWithEmailAndPassword(firebase, email, password);
      console.log(res.user);
      let user = res.user;

      let data = res.user.uid;
      await setDoc(doc(db, "Users", data), {
        id: data,
        username: username,
        email: email,
        phone: phone,
      });

      await updateProfile(user, { displayName: username });

      navigate("login")
    } catch (error) {
      console.log(error);
    }

    
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
