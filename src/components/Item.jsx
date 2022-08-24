import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link
      to={`/item/${props.itemData["id"]}`}
      className="text-dark text-decoration-none"
    >
      <div className="col h-100">
        <div className="card">
          <img
            className="card-img-top"
            src={props.itemData["item-image"]}
            alt={props.itemData["item-name"]}
          />
          <div className="card-body">
            <h4 className="card-title font-weight-bold ">
              {props.itemData["item-name"]}
            </h4>
            <h4 className="card-text">${props.itemData["item-price"]}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
