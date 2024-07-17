// import {
//     ref,
//     storage,
//     uploadBytes,
//     getDownloadURL,
//     db,
//     collection,
//     addDoc,
//     auth,
//   } from "../utils/utils.js";
  
//   console.log(auth);
  
//   const event_form = document.getElementById("event_form");
  
//   event_form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log(e);
  
//     const eventInfo = {
//       image: e.target[0].files[0],
//       name: e.target[1].value,
//       price: e.target[2].value,
//       colour: e.target[3].value,
//       model: e.target[4].value,
//       sale: e.target[5].value,
     
//     };
//     const imgRef = ref(storage, eventInfo.banner.name);
//     uploadBytes(imgRef, eventInfo.banner).then(() => {
//       console.log("File Upload Done");
//       getDownloadURL(imgRef).then((url) => {
//         console.log("Url got", url);
//         eventInfo.banner = url;
//         // add document to events collection
//         const eventCollection = collection(db, "events");
//         addDoc(eventCollection, eventInfo).then(() => {
//           console.log("Document ADDED");
//           window.location.href = "/";
//         });
//       });
//     });
//   });
import {
    ref,
    storage,
    uploadBytes,
    getDownloadURL,
    db,
    collection,
    addDoc,
    auth,
  } from "../utils/utils.js";
  
  console.log(auth);
  
  const event_form = document.getElementById("event_form");
  
  event_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e);
  
    const eventInfo = {
      banner: e.target[0].files[0], // Ensure this is correctly referenced as 'banner'
      name: e.target[1].value,
      price: e.target[2].value,
      colour: e.target[3].value,
      model: e.target[4].value,
      sale: e.target[5].value,
      createdBy: auth.currentUser.uid,
      createdByEmail: auth.currentUser.email,
      likes: [],
    };
  
    try {
      // Reference to the storage location
      const storageRef = ref(storage, `phoneImages/${eventInfo.banner.name}`);
  
      // Upload image to Firebase Storage
      await uploadBytes(storageRef, eventInfo.banner);
      console.log("File Upload Done");
  
      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);
      console.log("Url got", imageUrl);
  
      // Add the image URL to the event info
      eventInfo.banner = imageUrl;
  
      // Reference to the Firestore collection
      const eventsCollection = collection(db, "events");
  
      // Add event info to Firestore
      await addDoc(eventsCollection, eventInfo);
      console.log("Document ADDED");
  
      // Redirect or show a success message
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating event: ", error);
      alert("Error creating event. Please try again.");
    }
  });
  