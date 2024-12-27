import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl8fD-YQd955oT3ZGum5lpIDRoLYVz928",
  authDomain: "firstapp-95246.firebaseapp.com",
  projectId: "firstapp-95246",
  storageBucket: "firstapp-95246.appspot.com",
  messagingSenderId: "813000181457",
  appId: "1:813000181457:web:8270d4ec863c34274b27f0"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth };