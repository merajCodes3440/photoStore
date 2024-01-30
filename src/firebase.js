import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDtwE1XiqBZKPn5tsizXs306p9_HTbyZVo",
  authDomain: "img-db-78733.firebaseapp.com",
  projectId: "img-db-78733",
  storageBucket: "img-db-78733.appspot.com",
  messagingSenderId: "435262023135",
  appId: "1:435262023135:web:d4a58935d80b6208f7906a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);