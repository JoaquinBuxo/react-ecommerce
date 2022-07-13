import products from "../data/MOCK_DATA.json";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [spinner, setSpinner] = useState(false);

  const getProduct = useEffect(() => {
    setSpinner(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 2000);
    }).then((res) => {
      setSpinner(false);
      setProduct(res);
    });
  }, []);

  return (
    <div className="container mt-3">
      {spinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <ItemDetail item={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
