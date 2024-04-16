import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyi8Rr1d3ZfiG4jWiDu7kg1tOYj3E2fac",
  authDomain: "miniblog-curso-react-8ff73.firebaseapp.com",
  projectId: "miniblog-curso-react-8ff73",
  storageBucket: "miniblog-curso-react-8ff73.appspot.com",
  messagingSenderId: "228882363070",
  appId: "1:228882363070:web:2356acdbc1958c66b924ef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};