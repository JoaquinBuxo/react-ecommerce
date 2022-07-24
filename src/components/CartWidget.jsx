import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const context = useContext(CartContext);

  return (
    <Link to="/cart" className="position-relative">
      <i className="bi-cart2" style={{ fontSize: 30 }}></i>
      <span className="badge rounded-pill badge-notification bg-danger position-absolute">
        {context.cartList.reduce((a, b) => a + b["quantity"], 0)}
      </span>
    </Link>
  );
};

export default CartWidget;
