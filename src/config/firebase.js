import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBAzQFQVVIv-H1Xq29cm3nNNamSEpCjKyk",
  authDomain: "tiktok---jornada-b77e6.firebaseapp.com",
  projectId: "tiktok---jornada-b77e6",
  storageBucket: "tiktok---jornada-b77e6.appspot.com",
  messagingSenderId: "814485176717",
  appId: "1:814485176717:web:049c9d861c03f4f482fdc4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;