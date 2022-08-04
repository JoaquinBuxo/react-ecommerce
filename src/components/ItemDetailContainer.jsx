import products from "../data/MOCK_DATA.json";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setSpinner(true);
    const firstoreFetch = async () => {
      const productsCollection = query(collection(db, "products"));
      const requestFilter = query(productsCollection, where(documentId(), "==", itemId));
      const dataFromFirestore = await getDocs(requestFilter);
      return dataFromFirestore;
    };
    firstoreFetch().then((res) => {
      setSpinner(false);
      setProduct(res.docs[0].data());
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
