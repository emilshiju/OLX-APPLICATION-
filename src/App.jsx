import React, { useContext, useEffect ,useState} from "react"
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter , Route, Routes ,useNavigate} from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import View from "./Pages/ViewPost"
import  { AuthContext } from "./store/firebaseCotext.jsx"

import Post from "./store/postContext.jsx"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./protection.jsx"


const App=()=>{
  const auth = getAuth();

  
  const {user,setUser}=useContext(AuthContext)
  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        const uid = user.uid;
        
      } else {
    
      }
    });

    console.log(user)
  })

  
  return (
    <>
   
    <div>
      <Post>
    
    
      <Routes>
        <Route exact path="/" element={<Home />} />
      
        <Route path='/signup' element={<Signup />} />
          
        <Route path='/login' element={<Login />} />

        <Route path='/create' element={<ProtectedRoute />}>
        <Route path='/create' element={<Create />} />
        </Route> 

          <Route path='/view' element={<ProtectedRoute />}>
          <Route path='/view' element={<View />} />
          </Route>
        

        </Routes>
       

        </Post>

        </div>  
    
        </> 
  )
}

export default App