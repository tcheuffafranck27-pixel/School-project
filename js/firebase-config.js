/**
 * Firebase configuration for ELIDENS Gallery
 * Used by Gallery.html and admin.html for Firestore (posts, comments, likes)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFHZFjViGHfLcZEBfG43VBabil5Lvho_g",
  authDomain: "elidens-gallery.firebaseapp.com",
  projectId: "elidens-gallery",
  storageBucket: "elidens-gallery.firebasestorage.app",
  messagingSenderId: "733043429526",
  appId: "1:733043429526:web:fe5e9c51fe5601a247f2b7",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
