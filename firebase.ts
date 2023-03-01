import { getApp, getApps, initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import exp from "constants";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGDjwiEoX_Mun34pHUiw97W4E49vN5twg",
    authDomain: "chat-gpt-clone-941b9.firebaseapp.com",
    projectId: "chat-gpt-clone-941b9",
    storageBucket: "chat-gpt-clone-941b9.appspot.com",
    messagingSenderId: "595511861818",
    appId: "1:595511861818:web:0fc9737c777f2ac36e0b03"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };