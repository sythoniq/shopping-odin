export function ItemCard(props) {
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
          <div className="set">
            <button onClick={(e) => props.handleDecrease(e.target.closest("main > div"))}>-</button>
            <input type="text" placeholder="Enter item quantity" id={props.itemId} onChange={(e) => props.handleInput(e.target.value)} />
            <button onClick={(e) =>
              props.handleIncrease(e.target.closest("main > div"))}>+</button>
          </div>
          <button id={props.itemId} onClick={(e) => {e.preventDefault(); props.handleInput(e.target)}}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export function CartCard(props) {
  return (
    <article className="cart-card" id={props.itemId}>
      <div className="item-details">
        <header className="card-header">
          <img src={props.imgSrc} alt={props.imgAlt} />
          <h3>{props.itemName}</h3>
        </header>
        <li className="total-price">
          <p>{props.totalPrice}</p>
        </li>
      </div> 
      <div className="card-footer">
        <li>
          <span onClick={(e) => props.handleRemove(e.target)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg></span>
          <p>Remove</p>
        </li>
        <div className="change-quantity">
          <button onClick={(e) => props.handleDecrease(e.target)}>-</button>
          <p>{props.itemQuantity}</p>
          <button onClick={(e) => props.handleIncrease(e.target)}>+</button>
        </div>
      </div>
    </article>
  )
}
