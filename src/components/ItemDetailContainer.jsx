import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setSpinner(true);
    firestoreFetchOne(itemId).then((res) => {
      setSpinner(false);
      setProduct(res);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5 pt-5">
      {spinner ? <Spinner /> : <ItemDetail item={product} />}
    </div>
  );
};

export default ItemDetailContainer;
