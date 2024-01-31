import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZJipkJGNno2QMWcXp0IpAdkeYKrCFMGI",
    authDomain: "olx-clone-fea5b.firebaseapp.com",
    projectId: "olx-clone-fea5b",
    storageBucket: "olx-clone-fea5b.appspot.com",
    messagingSenderId: "212427045281",
    appId: "1:212427045281:web:745a02722e64e6a29533e0",
    measurementId: "G-H8XJHXE7W0"
  };

 const app= initializeApp(firebaseConfig);
 export const firebase=getAuth(app)
 export const db = getFirestore(app);
