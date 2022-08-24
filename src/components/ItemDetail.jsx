import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
  const [numProducts, setNumProducts] = useState(0);
  const context = useContext(CartContext);

  const cartListItem = context.cartList.find(
    (item) => item["id"] === props.item.id
  );

  const onAdd = (quantity) => {
    setNumProducts(quantity);
    context.addItem(props.item, quantity);
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.item["item-image"]} className="card-img" alt={props.item["item-name"]} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{props.item["item-name"]}</h4>
            <h4 className="font-weight-bold">${props.item["item-price"]}</h4>
            {numProducts > 0 ? (
              <div>
                <Link to="/cart">
                  <button type="button" className="btn btn-secondary">CART</button>
                </Link>
                <Link to="/">
                  <button type="button" className="btn btn-secondary mx-3">GO TO PRODUCTS</button>
                </Link>
              </div>
            ) : (
              <ItemCount
                stock={
                  props.item["item-stock"] -
                  (cartListItem ? cartListItem.quantity : 0)
                }
                init={1}
                onAdd={onAdd}
              />
            )}
            <hr />
            <h5>Description</h5>
            <p className="card-text">{props.item["item-description"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
