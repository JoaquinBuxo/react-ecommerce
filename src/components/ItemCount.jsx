import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.init);

  const addItem = () => {
    if (props.stock > count) {
      setCount(count + 1);
    }
  };

  const removeItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div>(Stock: {props.stock})</div>
          <div className="input-group mb-3">
            <button
              type="button"
              className="btn btn-info btn-sm text-white"
              onClick={removeItem}
            >
              -
            </button>
            <div className="form-control form-control-sm">{count}</div>
            <button
              type="button"
              className="btn btn-info btn-sm text-white"
              onClick={addItem}
              disabled={props.stock === 0}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-info btn-sm col-sm-12 text-white"
            onClick={() => props.onAdd(count)}
            disabled={props.stock === 0}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
