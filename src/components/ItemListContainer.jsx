import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firstoreFetch } from "../utils/firestoreFetch";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setSpinner(true);
    firstoreFetch(categoryId).then((res) => {
      setSpinner(false);
      setProductList(res);
    });
  }, [categoryId]);

  return (
    <div className="container mt-5 mb-5 pt-5">
      {spinner ? <Spinner /> : <ItemList items={productList} />}
    </div>
  );
};

export default ItemListContainer;
