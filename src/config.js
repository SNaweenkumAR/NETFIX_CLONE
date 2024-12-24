

import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// TMDB Access Key
const TMDB_Access_Key = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDQ0ZGU2NDIzYzdiMGU3MGIyODUwYmU4MjJhNDYyMCIsIm5iZiI6MTczNDkzMDA4NS42OTcsInN1YiI6IjY3NjhlZWE1MWM1NGViZmVkNWM0ZDc4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPTWMzmhXHPTm_LpeRmcpaQfhi3ew8dJ6hOEESlZA5o;

export { firebaseConfig, TMDB_Access_Key };
