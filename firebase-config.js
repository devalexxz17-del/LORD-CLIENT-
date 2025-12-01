// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBX35mAnm9IJhoRtQm8BdW0DQ9QNu2nemc",
  authDomain: "worldxwebvip.firebaseapp.com",
  databaseURL: "https://worldxwebvip-default-rtdb.firebaseio.com",
  projectId: "worldxwebvip",
  storageBucket: "worldxwebvip.firebasestorage.app",
  messagingSenderId: "264706309730",
  appId: "1:264706309730:web:4444db57d900b08b245b3b",
  measurementId: "G-G26Y8M2BY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };