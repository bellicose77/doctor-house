import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initilaizationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initilaizationAuthentication;