import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  const onAdd = (numProducts) => {
    console.log(`Have been added ${numProducts} products to the cart`);
  };

  return (
    <div className="container mt-3">
      <h1>{props.greeting}</h1>
      <ItemCount stock={5} init={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
