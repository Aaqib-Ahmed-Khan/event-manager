import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore,doc, setDoc,getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage,ref, uploadBytes,
    getDownloadURL,} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyAa-W298u62LiPhanNZ134EjcEVYhoVR6c",
  authDomain: "my-first-project-ca126.firebaseapp.com",
  projectId: "my-first-project-ca126",
  storageBucket: "my-first-project-ca126.appspot.com",
  messagingSenderId: "974365332473",
  appId: "1:974365332473:web:5b7055804d38470389e328",
  measurementId: "G-9GLVE3LG1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export{auth,db,storage,onAuthStateChanged,createUserWithEmailAndPassword,doc, setDoc,ref, uploadBytes,
    getDownloadURL,signInWithEmailAndPassword,signOut,getDoc};