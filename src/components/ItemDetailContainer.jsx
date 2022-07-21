import products from "../data/MOCK_DATA.json";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setSpinner(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find((item) => item["id"] === parseInt(itemId)));
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
