import React, { useState, useEffect, useContext, useId } from "react";

import "./View.css";
import { postContext } from "../../store/postContext";
import { FirebaseContext } from "../../store/firebaseCotext";
import { collection, query, where, getDocs } from "firebase/firestore";

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(postContext);
  const { firebase,db } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails;

    check(userId);
  },[]);

  async function check(userId) {
    console.log("amm her her")
    console.log(userId)
    const q = await query(collection(db, "Users"), where("id", "==",userId));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserDetails(doc.data())
      console.log( doc.data());
    });
  }
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
        {/* <img src={postDetails.url} alt="" /> */}
          <p>&#x20B9; {postDetails.price}</p>
          <p>year:{postDetails.year}</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
      {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  
  );
}
export default View;
