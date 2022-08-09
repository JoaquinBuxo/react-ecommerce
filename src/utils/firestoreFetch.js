import { db } from "../utils/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export const firstoreFetch = async (categoryId) => {
  const productsCollection = query(collection(db, "products"));
  const requestFilter = categoryId
    ? query(productsCollection, where("category-id", "==", categoryId))
    : productsCollection;
  const dataFiltered = await getDocs(requestFilter);
  const dataFromFirestore = dataFiltered.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchOne = async (itemId) => {
  const product = doc(db, "products", itemId);
  const getProduct = await getDoc(product);

  if (getProduct.exists()) {
    return { id: itemId, ...getProduct.data() };
  } else {
    console.log("This product doesn't exist!");
  }
};
