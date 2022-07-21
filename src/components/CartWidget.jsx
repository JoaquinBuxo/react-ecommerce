import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="position-relative">
      <i className="bi-cart2" style={{ fontSize: 30 }}></i>
      <span className="badge rounded-pill badge-notification bg-danger position-absolute">
        3
      </span>
    </Link>
  );
};

export default CartWidget;
