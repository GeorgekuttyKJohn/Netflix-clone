import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDrk9hmKO9lwfuRvlRt4Kt_xyrD2dXOAro",
  authDomain: "netflix-clone-b6569.firebaseapp.com",
  projectId: "netflix-clone-b6569",
  storageBucket: "netflix-clone-b6569.appspot.com",
  messagingSenderId: "1060065320344",
  appId: "1:1060065320344:web:43f7855095e14d3e1f9fed"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup =async (name, email, password)=>{
    try{
      const res =  await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    }catch(error){
        console.log(error);
        toast.error(error.code);
    }
}


const login = async (email,password)=>{
    try{
        signInWithEmailAndPassword(auth, email,password);


    }catch(error){
        console.log(error);
        toast.error(error.code);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};