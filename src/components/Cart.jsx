import { db } from "../utils/firebaseConfig";
import {
  doc,
  serverTimestamp,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  const createOrder = () => {
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

  return (
    <div>
      <div className="container mt-5 mb-5 pt-5">
        {context.cartList.length > 0 && (
          <div className="d-md-flex justify-content-around mb-5 col-12 align-items-center">
            <h2 className="col-12 col-md-4 text-center">Your Cart</h2>
            <button type="button" className="col-12 col-md-2 btn btn-danger h-50 my-4" onClick={() => context.clear()}>
              Remove All
            </button>
            <div className="d-flex justify-content-between p-3 border col-12 col-md-4 ml-auto rounded-3 align-items-center">
              <h3 className="mb-0">
                Total Price: $
                {context.cartList
                  .reduce((a, b) => a + b["item-price"] * b["quantity"], 0)
                  .toFixed(2)}
              </h3>
              <button type="button" className="btn btn-info text-white" onClick={createOrder}>Checkout</button>
            </div>
          </div>
        )}
        {context.cartList.length > 0 ? (
          context.cartList.map((item) => (
            <div key={item.id} className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border rounded-3 overflow-hidden">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                          <img
                            src={item["item-image"]}
                            alt={item["item-name"]}
                            className="w-100"
                          />
                        </div>
                      </div>
                      <Link
                        to={`/item/${item.id}`}
                        className="col-md-6 col-lg-6 col-xl-6 card-body text-decoration-none"
                      >
                        <h4 className="text-center text-md-left">{item["item-name"]}</h4>
                      </Link>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-top border-start card-body">
                        <div className="d-flex flex-column align-items-center mb-1 h-100 justify-content-evenly">
                          <h3 className="mb-1 me-1">{item.quantity} items</h3>
                          <h4 className="mb-1 me-1">
                            <span className="text-secondary">Price each:</span> ${item["item-price"]}
                          </h4>
                          <h4 className="mb-1 me-1">
                          <span className="text-secondary">Price total:</span> $
                            {(item["item-price"] * item.quantity).toFixed(2)}
                          </h4>
                          <button type="button" className="btn btn-secondary" onClick={() => context.removeItem(item.id)}>
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="row justify-content-center">
            <h2 className="row justify-content-center mt-5">
              Your cart is empty
            </h2>
            <Link to="/" className="row justify-content-center mt-3 col-6 col-md-4 text-decoration-none">
              <button type="button" className="btn btn-secondary">GO TO PRODUCTS</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
