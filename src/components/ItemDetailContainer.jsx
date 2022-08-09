import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { firestoreFetchOne } from "../utils/firestoreFetch";

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
