import { Link } from "react-router-dom";

const ItemCart = (props) => {
  return (
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3 overflow-hidden">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                <img
                  src={props.item["item-image"]}
                  alt={props.item["item-name"]}
                  className="w-100"
                />
              </div>
            </div>
            <Link
              to={`/item/${props.item.id}`}
              className="col-md-6 col-lg-6 col-xl-6 card-body text-decoration-none"
            >
              <h4 className="text-center text-md-left">
                {props.item["item-name"]}
              </h4>
            </Link>
            <div className="col-md-6 col-lg-3 col-xl-3 border-top border-start card-body">
              <div className="d-flex flex-column align-items-center mb-1 h-100 justify-content-evenly">
                <h3 className="mb-1 me-1">{props.item.quantity} items</h3>
                <h4 className="mb-1 me-1">
                  <span className="text-secondary">Price each:</span> $
                  {props.item["item-price"]}
                </h4>
                <h4 className="mb-1 me-1">
                  <span className="text-secondary">Price total:</span> $
                  {(props.item["item-price"] * props.item.quantity).toFixed(2)}
                </h4>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => props.context.removeItem(props.item.id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
