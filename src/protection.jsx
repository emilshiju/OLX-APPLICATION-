import React, { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { AuthContext } from "./store/firebaseCotext"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const   ProtectedRoute=()=>{

    const auth = getAuth();
    const navigate=useNavigate()
    const { user } = useContext(AuthContext);

    useEffect(()=>{
    
        if(!user){
           
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            alert(user)
            if (!user) {
                navigate('/login')
            }
           
          });
      
          // Cleanup the subscription when the component unmounts
          return () => unsubscribe();
    },[user])
   

    return (
         <Outlet /> 
    )
}

export default ProtectedRoute