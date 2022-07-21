import products from "../data/MOCK_DATA.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setSpinner(true);
    if (categoryId === undefined) {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      }).then((res) => {
        setSpinner(false);
        setProductList(res);
      });
    } else {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            products.filter((item) => item["category-id"] === categoryId)
          );
        }, 2000);
      }).then((res) => {
        setSpinner(false);
        setProductList(res);
      });
    }
  }, [categoryId]);

  return (
    <div className="container mt-3">
      {spinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <ItemList items={productList} />
      )}
    </div>
  );
};

export default ItemListContainer;
