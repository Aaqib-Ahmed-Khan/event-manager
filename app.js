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


// import { auth, db, onAuthStateChanged, doc, signOut, getDoc, getDocs, collection } from "./utils/utils.js";

// const logoutBtn = document.getElementById("logout_btn");
// const loginLink = document.getElementById("login_link");
// const userImg = document.getElementById("user_img");
// const myEventsBtn = document.getElementById("myevents_btn");
// const createEventBtn = document.getElementById("create_event_btn");
// const events_cards_container = document.getElementById(
//   "events_cards_container"
// );

// getAllEvents();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     userImg.style.display = "inline-block";
//     logoutBtn.style.display = "inline-block";
//     loginLink.style.display = "none";
//     myEventsBtn.style.display = "inline-block";
//     createEventBtn.style.display = "inline-block";
//     getUserInfo(uid);
//   } else {
//     userImg.style.display = "none";
//     logoutBtn.style.display = "inline-block";
//     myEventsBtn.style.display = "none";
//     createEventBtn.style.display = "none";
//     loginLink.style.display = "inline-block";
//   }
// });

// logoutBtn.addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert("You have been signed out successfully!");
//       window.location.href = "/auth/login/index.html";
//     })
//     .catch((error) => {
//       console.error("Error signing out:", error);
//     });
// });

// function getUserInfo(uid) {
//   const userRef = doc(db, "users", uid);
//   getDoc(userRef)
//     .then((doc) => {
//       if (doc.exists()) {
//         userImg.src = doc.data().img;
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error getting document:", error);
//     });
// }

// async function getAllEvents() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "events"));
//     // Assuming there's an element to display the events, it was not in your HTML
//     // eventsCardsContainer.innerHTML = "";
//     querySnapshot.forEach((doc) => {
//       const eventData = doc.data();
//       // Process the event data as needed
//       console.log(`${doc.id}' => ${eventData}`);
//     });
//   } catch (err) {
//     console.error("Error getting events:", err);
//   }
// }

// async function getAllEvents() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "events"));
//     events_cards_container=''
//     querySnapshot.forEach((doc) => {
//       const eventData = doc.data()
//       const {banner,title,model, createdByEmail,desc,sale} =event;
//       const card =' <div class="bg-white shadow-md rounded-lg overflow-hidden">
//           <img
//             src="${banner}"
//             alt="Event Image"
//             class="w-full h-48 object-cover"
//           />
//           <div class="p-4">
//             <h2 class="text-xl font-bold mb-2">${title}</h2>
//             <p class="text-gray-600 mb-2">${model}</p>
//             <p class="text-gray-600 mb-2">${createdByEmail}</p>
//             <p class="text-gray-600 mb-2">${sale}</p>
//             <div class="flex justify-between items-center">
//               <button
//                 class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//               >
//                 Like
//               </button>
//             </div>
//           </div>
      
//         events_cards_container.innerHTML+=card;
    
//       console.log(`${doc.id} =>`, eventData);
//     });
//   } catch (err) {
//     console.error("Error getting events:", err);
//   }
// }
// async function getAllEvents() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "events"));
//     events_cards_container.innerHTML = ''; // Clear the container before appending new cards
//     querySnapshot.forEach((doc) => {
//       const eventData = doc.data();
//       const { banner,name, model, createdByEmail, price, sale } = eventData;
//       const card = `
//         <div class="bg-white shadow-md rounded-lg overflow-hidden">
//           <img
//             src="${banner}"
//             alt="Event Image"
//             class="w-full h-48 object-cover"
//           />
//           <div class="p-4">
//             <h2 class="text-xl font-bold mb-2">${name}</h2>
//             <h3 class="text-lg font-semibold mb-2">Model: ${model}</h3>
//             <h3 class="text-lg font-semibold mb-2">Price: ${price}</h3>
//             <h3 class="text-lg font-semibold mb-2">Sale: ${sale}</h3>
//             <p class="text-gray-600 mb-2">Created by: ${createdByEmail}</p>
//             <div class="flex justify-between items-center">
//               <button
//                 class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//               >
//                 Like
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//       events_cards_container.innerHTML += card;
//       console.log(`${doc.id} =>`, eventData);
//     });
//   } catch (err) {
//     console.error("Error getting events:", err);
//   }
// }

// async function getAllEvents() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "events"));
//     const events_cards_container = document.getElementById("events_cards_container");
//     events_cards_container.innerHTML = ''; // Clear the container before appending new cards
//     querySnapshot.forEach((doc) => {
//       const eventData = doc.data();
//       const { banner, name, model, createdByEmail, price, sale } = eventData;
//       const card = `
//         <div class="bg-white shadow-md rounded-lg overflow-hidden">
//           <img
//             src="${banner}"
//             alt="Event Image"
//             class="w-full h-48 object-cover"
//           />
//           <div class="p-4">
//             <h2 class="text-xl font-bold mb-2">${name}</h2>
//             <h3 class="text-lg font-semibold mb-2">Model: ${model}</h3>
//             <h3 class="text-lg font-semibold mb-2">Price: ${price}</h3>
//             <h3 class="text-lg font-semibold mb-2">Sale: ${sale}</h3>
//             <p class="text-gray-600 mb-2">Created by: ${createdByEmail}</p>
//             <div class="flex justify-between items-center">
//               <button class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
//                 Like
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//       events_cards_container.innerHTML += card;
//       console.log(`${doc.id} =>`, eventData);
//     });
//   } catch (err) {
//     console.error("Error getting events:", err);
//   }
// }

// getAllEvents();

// Import necessary Firebase and Firestore utilities
// Import necessary Firebase and Firestore utilities
// import { auth, db, onAuthStateChanged, signOut, getDocs, collection, arrayUnion } from "./utils/utils.js";

// // Select necessary elements from the DOM
// const logoutBtn = document.getElementById("logout_btn");
// const loginLink = document.getElementById("login_link");
// const userImg = document.getElementById("user_img");
// const myEventsBtn = document.getElementById("myevents_btn");
// const createEventBtn = document.getElementById("create_event_btn");
// const events_cards_container = document.getElementById("events_cards_container");

// // Function to fetch and display all events
// async function getAllEvents() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "events"));
//     events_cards_container.innerHTML = ''; // Clear the container before appending new cards
//     querySnapshot.forEach((doc) => {
//       const eventData = doc.data();
//       const { banner, name, model, createdByEmail, price, sale } = eventData;
//       const card = `
//         <div class="bg-white shadow-md rounded-lg overflow-hidden">
//           <img
//             src="${banner}"
//             alt="Event Image"
//             class="w-full h-48 object-cover"
//           />
//           <div class="p-4">
//             <h2 class="text-xl font-bold mb-2">${name}</h2>
//             <h3 class="text-lg font-semibold mb-2">Model: ${model}</h3>
//             <h3 class="text-lg font-semibold mb-2">Price: ${price}</h3>
//             <h3 class="text-lg font-semibold mb-2">Sale: ${sale}</h3>
//             <p class="text-gray-600 mb-2">Created by: ${createdByEmail}</p>
//             <div class="flex justify-between items-center">
//               <button 
//               id=${doc.id}
//               onclick="likeEvent(this)" class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
//                 Like
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//       window.likeEvent=likeEvent;
//       events_cards_container.innerHTML += card;
//       console.log(`${doc.id} =>`, eventData);
//     });
//   } catch (err) {
//     console.error("Error getting events:", err);
//   }
// }
// async function likeEvent(e) {
//   console.log(e);
//   if (auth.currentUser) {
//     const docRef = doc(db, "events", e.id);
//     console.log("Document Reference: ", docRef);

//     try {
//       await updateDoc(docRef, {
//         likes: arrayUnion(auth.currentUser.uid)
//       });
//       alert("Document Updated");
//     } catch (err) {
//       console.error("Error updating document:", err);
//     }
//   } else {
//     window.location.href = '../auth/login/index.html';
//   }
// }

// // Function to handle user authentication state
// function handleUserState(user) {
//   if (user) {
//     const uid = user.uid;
//     userImg.style.display = "inline-block";
//     logoutBtn.style.display = "inline-block";
//     loginLink.style.display = "none";
//     myEventsBtn.style.display = "inline-block";
//     createEventBtn.style.display = "inline-block";
//     // getUserInfo(uid);
//     getAllEvents(); // Fetch events when user is logged in
//   } else {
//     userImg.style.display = "none";
//     logoutBtn.style.display = "none";
//     myEventsBtn.style.display = "none";
//     createEventBtn.style.display = "none";
//     loginLink.style.display = "inline-block";
//     getAllEvents(); // Fetch events when user is logged out
//   }
// }

// // Check authentication state on page load
// onAuthStateChanged(auth, handleUserState);

// // Logout button event listener
// logoutBtn.addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert("You have been signed out successfully!");
//       window.location.href = "/auth/login/index.html"; // Redirect to login page after logout
//     })
//     .catch((error) => {
//       console.error("Error signing out:", error);
//     });
// });

// // Function to get user information
// function getUserInfo(uid) {
//   const userRef = db.collection("users").doc(uid);
//   userRef.get()
//     .then((doc) => {
//       if (doc.exists) {
//         userImg.src = doc.data().img;
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error getting document:", error);
//     });
// }
import { auth, db, onAuthStateChanged, signOut, getDocs, collection, arrayUnion, doc, updateDoc } from "./utils/utils.js";

// Select necessary elements from the DOM
const logoutBtn = document.getElementById("logout_btn");
const loginLink = document.getElementById("login_link");
const userImg = document.getElementById("user_img");
const myEventsBtn = document.getElementById("myevents_btn");
const createEventBtn = document.getElementById("create_event_btn");
const events_cards_container = document.getElementById("events_cards_container");

// Function to fetch and display all events
async function getAllEvents() {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    events_cards_container.innerHTML = ''; // Clear the container before appending new cards
    querySnapshot.forEach((doc) => {
      const eventData = doc.data();
      const { banner, name, model, createdByEmail, price, sale } = eventData;
      const card = `
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="${banner}"
            alt="Event Image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">${name}</h2>
            <h3 class="text-lg font-semibold mb-2">Model: ${model}</h3>
            <h3 class="text-lg font-semibold mb-2">Price: ${price}</h3>
            <h3 class="text-lg font-semibold mb-2">Sale: ${sale}</h3>
            <p class="text-gray-600 mb-2">Created by: ${createdByEmail}</p>
            <div class="flex justify-between items-center">
              <button 
              id=${doc.id}
              onclick="likeEvent(this)" class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
               ${
              auth?.currentUser && event?.likes?.includes(auth?.currentUser.uid)
                ? "Liked.."
                : "Like"
            } ${events?.likes?.length ? events?.likes?.length : ""}
          </button>
              </button>
            </div>
          </div>
        </div>
      `;
      window.likeEvent = likeEvent;
      events_cards_container.innerHTML += card;
      console.log(`${doc.id} =>`, eventData);
    });
  } catch (err) {
    console.error("Error getting events:", err);
  }
}

// Function to handle liking an event
async function likeEvent(e) {
  console.log(e);
  if (auth.currentUser) {
    const docRef = doc(db, "events", e.id);
    console.log("Document Reference: ", docRef);

    try {
      await updateDoc(docRef, {
        likes: arrayUnion(auth.currentUser.uid)
      });
      alert("Document Updated");
    } catch (err) {
      console.error("Error updating document:", err);
    }
  } else {
    window.location.href = '../auth/login/index.html';
  }
}


// Function to handle user authentication state
function handleUserState(user) {
  if (user) {
    const uid = user.uid;
    userImg.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";
    loginLink.style.display = "none";
    myEventsBtn.style.display = "inline-block";
    createEventBtn.style.display = "inline-block";
    // getUserInfo(uid);
    getAllEvents(); // Fetch events when user is logged in
  } else {
    userImg.style.display = "none";
    logoutBtn.style.display = "none";
    myEventsBtn.style.display = "none";
    createEventBtn.style.display = "none";
    loginLink.style.display = "inline-block";
    getAllEvents(); // Fetch events when user is logged out
  }
}

// Check authentication state on page load
onAuthStateChanged(auth, handleUserState);

// Logout button event listener
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("You have been signed out successfully!");
      window.location.href = "/auth/login/index.html"; // Redirect to login page after logout
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});

// Function to get user information
function getUserInfo(uid) {
  const userRef = db.collection("users").doc(uid);
  userRef.get()
    .then((doc) => {
      if (doc.exists) {
        userImg.src = doc.data().img;
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
}
