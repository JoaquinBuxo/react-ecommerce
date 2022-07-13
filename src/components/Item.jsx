import ItemCount from "./ItemCount";

const Item = (props) => {
  const onAdd = (numProducts) => {
    console.log(`Have been added ${numProducts} products to the cart`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={props.itemData["item-image"]} className="w-100" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div className="mask"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>{props.itemData["item-name"]}</h5>
                  <p className="text-truncate mb-4 mb-md-0">
                    {props.itemData["item-description"]}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-column align-items-center mb-1">
                    <h4 className="mb-1 me-1">
                      {props.itemData["item-price"]}
                    </h4>
                    <ItemCount stock={5} init={1} onAdd={onAdd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
