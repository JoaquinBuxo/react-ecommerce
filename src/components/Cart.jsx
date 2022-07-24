import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-around mt-5 mb-5">
          <h2>Your Cart</h2>
          <button className="px-4" onClick={() => context.clear()}>
            Remove All
          </button>
          <h3>
            Total Price: $
            {context.cartList
              .reduce((a, b) => a + b["item-price"] * b["quantity"], 0)
              .toFixed(2)}
          </h3>
        </div>
        {context.cartList.length > 0 &&
          context.cartList.map((item) => (
            <div key={item.id} className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body">
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
                        className="col-md-6 col-lg-6 col-xl-6"
                      >
                        <h5>{item["item-name"]}</h5>
                      </Link>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-column align-items-center mb-1">
                          <h3 className="mb-1 me-1">{item.quantity} items</h3>
                          <h4 className="mb-1 me-1">
                            Price each: ${item["item-price"]}
                          </h4>
                          <h4 className="mb-1 me-1">
                            Price total: $
                            {(item["item-price"] * item.quantity).toFixed(2)}
                          </h4>
                          <button onClick={() => context.removeItem(item.id)}>
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
