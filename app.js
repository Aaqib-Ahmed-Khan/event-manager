// import {auth,db,storage,onAuthStateChanged,doc,signOut} from "./utils/utils.js"
// const logout_btn=document.getElementById("logout_btn")
// // console.log("auth=>",auth);
// // console.log("db=>",db);
// // console.log("storage=>",storage);
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       // ...
//     } else {
//       window.location.href = "/auth/login/index.html"; 
//     }
//   });
//   logout_btn.addEventListener("click", () => {
//     signOut(auth);})
// import { auth, db, storage, onAuthStateChanged, doc, signOut,getDoc } from "./utils/utils.js";

// const logoutBtn = document.getElementById("logout_btn");
// const login_auth = document.getElementById("login_auth");
// const user_img = document.getElementById("user_img");

// const submitBtn = document.getElementById("submit_btn");
// submitBtn.addEventListener("click", () => {
//   // Navigate to the Events page
//   window.location.href = "/events"; // Replace with the correct URL
// });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     user_img.style.display = "inline-block";
//     logout_btn.style.display = "inline-block";
//     login_link.style.display = "none";
//     // ...
//   } else {
//     window.location.href = "/auth/login/index.html";
//     user_img.style.display = "none";
//     logout_btn.style.display = "none";
//   }
// });

// logoutBtn.addEventListener("click", () => {
//   try {
    
//     // You can add some feedback to the user here, such as a success message
//     alert("You have been signed out successfully!");
//     window.location.href = "/auth/login/index.html"; // Redirect to the login page
//   } catch (error) {
//     console.error("Error signing out:", error);
//     // You can add some error handling here, such as displaying an error message
//   }
// });
// signOut(auth);
//     function getUserInfo(uid) {
//       const userRef = doc(db, "users", uid);
//       getDoc(userRef).then((data) => {
//         console.log("data==>", data.id);
//         console.log("data==>", data.data());
//         user_img.src = data.data()?.img;
//       });
//     }


import { auth, db, storage, onAuthStateChanged, doc, signOut, getDoc } from "./utils/utils.js";

const logoutBtn = document.getElementById("logout_btn");
const login_auth = document.getElementById("login_auth");
const user_img = document.getElementById("user_img");
const submitBtn = document.getElementById("submit_btn");

submitBtn.addEventListener("click", () => {
  // Navigate to the Events page
  window.location.href = "/events"; // Replace with the correct URL
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    user_img.style.display = "inline-block";
    logout_btn.style.display = "inline-block";
    login_link.style.display = "none";
    //...
  } else {
    window.location.href = "/auth/login/index.html";
    user_img.style.display = "none";
    logout_btn.style.display = "none";
  }
});

logoutBtn.addEventListener("click", () => {
  try {
    // You can add some feedback to the user here, such as a success message
    alert("You have been signed out successfully!");
    window.location.href = "/auth/login/index.html"; // Redirect to the login page
  } catch (error) {
    console.error("Error signing out:", error);
    // You can add some error handling here, such as displaying an error message
  }
});

function getUserInfo(uid) {
  const userRef = doc(db, "users", uid);
  getDoc(userRef).then((data) => {
    console.log("data==>", data.id);
    console.log("data==>", data.data());
    user_img.src = data.data()?.img;
  });
}