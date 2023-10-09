import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFPKc-Oq5gVv9O4tiS3XbleJ_kELQurYA",
  authDomain: "devdeakin-a53b9.firebaseapp.com",
  projectId: "devdeakin-a53b9",
  storageBucket: "devdeakin-a53b9.appspot.com",
  messagingSenderId: "865323343697",
  appId: "1:865323343697:web:6fcae60f36f204f5c53d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



