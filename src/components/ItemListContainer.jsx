import products from "../data/MOCK_DATA.json";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [productList, setProductList] = useState([]);

  const getProductList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  getProductList.then((res) => setProductList(res));

  return (
    <div className="container mt-3">
      <h1>{props.title}</h1>
      <ItemList items={productList} />
    </div>
  );
};

export default ItemListContainer;
