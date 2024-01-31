import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FirebaseContext } from './store/firebaseCotext.jsx'
import Context from './store/firebaseCotext.jsx'
import {firebase,db} from "./firebase/config"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{firebase,db}}>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
    
  </FirebaseContext.Provider>
)
