import products from "../data/MOCK_DATA.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = (props) => {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const getProductList = useEffect(() => {
    setSpinner(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }).then((res) => {
      setSpinner(false);
      setProductList(res);
    });
  }, []);

  return (
    <div className="container mt-3">
      <h1>{props.title}</h1>
      {spinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <ItemList items={productList} />
      )}
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
