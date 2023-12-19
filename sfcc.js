import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { query, where, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNwGONZCSxy03_nR-361el_a_heSMa9uM",
  authDomain: "tunabook-aff.firebaseapp.com",
  projectId: "tunabook-aff",
  storageBucket: "tunabook-aff.appspot.com",
  messagingSenderId: "663731897991",
  appId: "1:663731897991:web:d0abf27d62446559851a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts(searchQuery) {

  const results = []
  const querySnapshot = await getDocs(collection(db, "product"));
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });

  return results
}

export async function getBestSellerProducts() {

  const results = []
  const q = query(collection(db, "product"), where("trending", "==", true));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });

  return results
}

module.exports = { getProducts, getBestSellerProducts }