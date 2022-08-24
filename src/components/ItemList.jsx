import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="card-deck row row-cols-1 row-cols-md-3 g-4">
      {props.items.map((item) => (
        <Item key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default ItemList;
