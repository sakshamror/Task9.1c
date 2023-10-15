import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCFPKc-Oq5gVv9O4tiS3XbleJ_kELQurYA",
//   authDomain: "devdeakin-a53b9.firebaseapp.com",
//   projectId: "devdeakin-a53b9",
//   storageBucket: "devdeakin-a53b9.appspot.com",
//   messagingSenderId: "865323343697",
//   appId: "1:865323343697:web:6fcae60f36f204f5c53d70"   
// };
const firebaseConfig = {
  apiKey: "AIzaSyDRTN8uS5T6pRFv6S1NScQds1TziARdLcI",
  authDomain: "p-8dea3.firebaseapp.com",
  projectId: "p-8dea3",
  storageBucket: "p-8dea3.appspot.com",
  messagingSenderId: "438490201800",
  appId: "1:438490201800:web:c161db9089ae98a0a42ffd",
  measurementId: "G-8NVQCSCPPV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



