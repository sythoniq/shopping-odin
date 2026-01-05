export default function Card(props) {
  return (
    <div className="item-card" id={props.itemId}>
      <div className="top-part">
        <h4>{props.itemName}</h4>
        <div className="img-cont">
          <img src={props.imgSrc} /> 
        </div>
      </div>
      <div className="details">
        <div className="card-details">
          <p>Price: $ {props.itemPrice}</p>
          <p>Rating: {props.itemRating} / 5</p>
        </div> 
        <div className="item-quantity">
          <button onClick={props.handleDecrease()}>-</button>
          <input type="text" placeholder="Enter item quantity" id={props.itemId} onChange={(e) => props.handleInput(e.target.value)} />
          <button onClick={props.handleIncrease()}>+</button>

          <button id={props.itemId} onClick={(e) => {e.preventDefault(); props.handleInput(e.target)}}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
