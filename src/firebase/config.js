import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  doc,
  onSnapshot,
  query,
  where,
  deleteDoc,
  orderBy,
  limit,
  writeBatch,
  startAt,
  endAt,
  increment,
  collectionGroup
} from "firebase/firestore";
import {
  deleteUser,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADRNJ-ZJVx-3m-KgsAthnqDJpA9hF44Hg",
  authDomain: "test-c57ca.firebaseapp.com",
  projectId: "test-c57ca",
  storageBucket: "test-c57ca.appspot.com",
  messagingSenderId: "717400977278",
  appId: "1:717400977278:web:ce888f4582c44648858d2f",
  measurementId: "G-H7F824YD11"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  collection,
  collectionGroup,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  doc,
  onSnapshot,
  query,
  where,
  deleteDoc,
  orderBy,
  limit,
  writeBatch,
  startAt,
  endAt,
  increment,
  auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser
};
