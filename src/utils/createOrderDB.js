import { db } from "./firebaseConfig";
import {
  doc,
  serverTimestamp,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";

export const createOrder = (context) => {

  let itemsForDB = context.cartList.map((item) => ({
    id: item.id,
    title: item["item-name"],
    price: item["item-price"],
    quantity: item.quantity,
  }));

  let order = {
    buyer: {
      email: "john@doe.com",
      name: "John Doe",
      phone: "123456789",
    },
    date: serverTimestamp(),
    items: itemsForDB,
    total: context.cartList
      .reduce((a, b) => a + b["item-price"] * b["quantity"], 0)
      .toFixed(2),
  };

  const createOrderInFirestore = async () => {
    const newOrder = doc(collection(db, "orders"));
    await setDoc(newOrder, order);
    return newOrder;
  };

  createOrderInFirestore()
    .then((res) =>
      alert(
        `Your purchase has been created. ID= ${res.id}.\nThanks for your order!`
      )
    )
    .catch((e) => console.log(e));

  context.cartList.forEach(async (item) => {
    const itemRef = doc(db, "products", item.id);
    await updateDoc(itemRef, {
      "item-stock": increment(-item.quantity),
    });
  });

  // clear cart
  context.clear();
};
