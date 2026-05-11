import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3HUucGIhy4CA6dNQmR-NQxU5LOfC8pac",
  authDomain: "event-platform-e2b1f.firebaseapp.com",
  projectId: "event-platform-e2b1f",
  storageBucket: "event-platform-e2b1f.firebasestorage.app",
  messagingSenderId: "473324340879",
  appId: "1:473324340879:web:56c386ac4ee79c31f212fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);