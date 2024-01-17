import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDy6uh3a8Qxpvp0bQmRpjZjpaD9ixXVpvw",
  authDomain: "modern-todolist-d080c.firebaseapp.com",
  projectId: "modern-todolist-d080c",
  storageBucket: "modern-todolist-d080c.appspot.com",
  messagingSenderId: "578138999660",
  appId: "1:578138999660:web:f8e96926369882c62f0149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initiaize authentication
export const auth = getAuth(app);



//nombre publico del proyecto
//modernTodolist-578138999660