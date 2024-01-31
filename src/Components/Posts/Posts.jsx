import React, { useState } from "react";

import { useEffect, useContext } from "react";
import {ShimmerPost} from "../../shimmer"
import Heart from "../../assets/Heart";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/firebaseCotext";

import { collection, getDocs } from "firebase/firestore";
import { postContext } from "../../store/postContext";

function Posts() {
  const navigate=useNavigate()
  const { firebase, db } = useContext(FirebaseContext);
  const [products, setProducts] = useState(false);
  const {setPostDetails}=useContext(postContext)
  useEffect(() => {
    call();

  
  },[]);

  async function call() {
    const querySnapshot = await getDocs(collection(db, "Product"));

    const allPost = querySnapshot.docs.map((product) => {
      return {
        ...product.data(),
        id: product.id,
      };
    });
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    console.log(allPost);
    setProducts(allPost);
  }

  
  return (
    <>
    {products? 
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          
          {products.map((products) => {
            
            return   <div className="card" onClick={()=>{setPostDetails(products),navigate('/view')}}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={products.url} alt="Image Not Found" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{products.price}</p>
                <span className="kilometer">{products.category}</span>
                <p className="name">{products.name}</p>
              </div>
              <div className="date">
                <span>{products.createdAt}</span>
              </div>
            </div>;
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    :<ShimmerPost />
    }
    </>
  );
}

export default Posts;
