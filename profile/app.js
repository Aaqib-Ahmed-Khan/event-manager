import { auth, db, doc, getDoc } from "../../utils/utils.js";

const userUid = ""; // Set the user's UID here

// Function to fetch user data from Firestore
async function fetchUserData(uid) {
    try {
        const userDocRef = doc(db, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            displayUserData(userData);
        } else {
            console.log("User document not found");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Function to display user data in the profile page
function displayUserData(userData) {
    const userInfoContainer = document.getElementById("user_info");
    
    userInfoContainer.innerHTML = `
        <div>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Name:</strong> ${userData.firstName} ${userData.lastName}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
            <p><strong>Company:</strong> ${userData.company}</p>
            <!-- Add more fields as needed -->
        </div>
    `;
}

// On page load, fetch and display user data
document.addEventListener("DOMContentLoaded", () => {
    fetchUserData(userUid);
});
