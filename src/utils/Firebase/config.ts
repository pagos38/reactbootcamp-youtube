import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjN6JrvpMPOvR8A8kPOjGnyrjs4PkTX2A",
    authDomain: "react-bootcamp-522ab.firebaseapp.com",
    projectId: "react-bootcamp-522ab",
    storageBucket: "react-bootcamp-522ab.appspot.com",
    messagingSenderId: "124940001623",
    appId: "1:124940001623:web:02c8f2c1927d8b1dc59e12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 認証用のfirebaseモジュール
export const fireAuth = firebase.auth();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
export default firebase;
