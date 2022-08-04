import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setSpinner(true);
    const firstoreFetch = async () => {
      const productsCollection = query(collection(db, "products"));
      const requestFilter = categoryId
        ? query(productsCollection, where("category-id", "==", categoryId))
        : productsCollection;
      const dataFiltered = await getDocs(requestFilter);
      const dataFromFirestore = dataFiltered.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataFromFirestore;
    };
    firstoreFetch().then((res) => {
      setSpinner(false);
      setProductList(res);
    });
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
