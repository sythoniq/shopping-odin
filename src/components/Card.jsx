export default function Card(props) {
  return (
    <div className="item-card" id={props.cardId}>
      <img src={props.imgSrc} /> 
      <div className="details">
        <div className="card-details">
          <h4>{props.itemName}</h4>
          <p>{props.itemDesc}</p>
          <p>$ {props.itemPrice}</p>
          <p>{props.itemRating} / 5</p>
        </div> 
        <div className="item-quantity">
          <button>-</button>
          <input type="text" placeholder="Enter item quantity" />
          <button>+</button>

          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
