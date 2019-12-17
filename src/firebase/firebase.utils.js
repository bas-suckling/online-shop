import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBxKlT7qIojFju3DGHEwun9wQh0uYBz8dk",
    authDomain: "surf-store-f48fa.firebaseapp.com",
    databaseURL: "https://surf-store-f48fa.firebaseio.com",
    projectId: "surf-store-f48fa",
    storageBucket: "surf-store-f48fa.appspot.com",
    messagingSenderId: "706715223280",
    appId: "1:706715223280:web:d7531c61b8c8bc91dfee35",
    measurementId: "G-9K9SLNBMXT"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase