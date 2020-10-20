/**
 * Created by ovesh on 25/8/20.
 */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDx90StKiy7vVlnQ84Ft9xRxQt5Jxnsook",
    authDomain: "musix-184d8.firebaseapp.com",
    databaseURL: "https://musix-184d8.firebaseio.com",
    projectId: "musix-184d8",
    storageBucket: "musix-184d8.appspot.com",
    messagingSenderId: "86132669020",
    appId: "1:86132669020:web:0bcf545718d29eafc38499",
    measurementId: "G-C8KT291F5N"
};
const fire = firebase.initializeApp(firebaseConfig);
/*
export default auth = firebase.auth();
export default firestore = firebase.firestore();*/
export default fire;