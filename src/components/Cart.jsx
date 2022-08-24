import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import { createOrder } from "../utils/createOrderDB";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <div className="container mt-5 mb-5 pt-5">
        {context.cartList.length > 0 && (
          <div className="d-md-flex justify-content-around mb-5 col-12 align-items-center">
            <h2 className="col-12 col-md-4 text-center">Your Cart</h2>
            <button
              type="button"
              className="col-12 col-md-2 btn btn-danger h-50 my-4"
              onClick={() => context.clear()}
            >
              Remove All
            </button>
            <div className="d-flex justify-content-between p-3 border col-12 col-md-4 ml-auto rounded-3 align-items-center">
              <h3 className="mb-0">
                Total Price: $
                {context.cartList
                  .reduce((a, b) => a + b["item-price"] * b["quantity"], 0)
                  .toFixed(2)}
              </h3>
              <button
                type="button"
                className="btn btn-info text-white"
                onClick={() => createOrder(context)}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
        {context.cartList.length > 0 ? (
          context.cartList.map((item) => (
            <ItemCart key={item.id} item={item} context={context} />
          ))
        ) : (
          <div className="row justify-content-center">
            <h2 className="row justify-content-center mt-5">
              Your cart is empty
            </h2>
            <Link
              to="/"
              className="row justify-content-center mt-3 col-6 col-md-4 text-decoration-none"
            >
              <button type="button" className="btn btn-secondary">
                GO TO PRODUCTS
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
