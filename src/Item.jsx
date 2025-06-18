function Item(props) {
  return (
    <div className="item-card">
      <img src={props.image} alt={props.imName} className="item-image" />
      <p className="item-title">Product: {props.name}</p>
      <p className="item-text">Category: {props.category}</p>
      <p className="item-text">Price: {props.price}</p>
      <p className="item-text">Status: {props.status}</p>
    </div>
  );
}

export default Item;
