import Item from "./Item";

const ItemList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Item key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default ItemList;
