import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";

import { useNavigate } from "react-router-dom"

import { FirebaseContext, AuthContext } from "../../store/firebaseCotext";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Create = () => {
  const { firebase ,db} = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [year,setYear]=useState(" ")

  const storage = getStorage();
  const navigate = useNavigate();

  const handleSubmit = async() => {
    

    let file=`image/${image.name}`

    const storageRef = ref(storage, file);
     
    
    

    const  uploadTaskawait = await uploadBytes(storageRef,image);

    getDownloadURL (ref(storage, file))
    .then(async(url)=>{
      console.log("lsdjfjsdkfjslfjsljflsdjfs")
      console.log(url)
      const date = new Date();

       await addDoc(collection(db, "Product"), {
        name,
        category,
        price,
        url,
        year,
        userId:user.uid,
        createdAt:date.toDateString()
      });

    })

    navigate("/")



  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="Name"
              defaultValue="John"
            />
            <br />
          
            <label>Year</label>
            <br />
            <input onChange={(e)=>{setYear(e.target.value)}}></input>
           <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              id="fname"
              name="Price"
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
