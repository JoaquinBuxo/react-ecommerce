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
    <div className="container-fluid mt-2 mb-3">
      <div className="row no-gutters">
        <div className="col-md-5 pr-2">
          <div className="card h-100">
            <div className="demo">
              <img
                src={props.item["item-image"]}
                alt={props.item["item-name"]}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card p-4">
            <div className="about">
              <span className="font-weight-bold">
                {props.item["item-name"]}
              </span>
              <h4 className="font-weight-bold">${props.item["item-price"]}</h4>
            </div>
            {numProducts > 0 ? (
              <div>
                <Link to="/cart">
                  <button type="button">CART</button>
                </Link>
                <Link to="/">
                  <button type="button">GO TO PRODUCTS</button>
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
            <div className="product-description">
              <div className="mt-2">
                <span className="font-weight-bold">Description</span>
                <p>{props.item["item-description"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
