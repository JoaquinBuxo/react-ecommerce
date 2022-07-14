import ItemCount from "./ItemCount";


const onAdd = (numProducts) => {
  console.log(`Have been added ${numProducts} products to the cart`);
};

const ItemDetail = (props) => {
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
              <h4 className="font-weight-bold">{props.item["item-price"]}</h4>
            </div>
            <ItemCount stock={5} init={1} onAdd={onAdd} />
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