import {useOutletContext} from 'react-router';
import {useState} from 'react';

import {CartCard as Card} from '../Card.jsx'

export default function Cart() {
  const {list, box} = useOutletContext();

  const [cart, setCart] = box;

  function handleItemRemove(e) {
    let tgt;
    let tgtItem;
    if (e.tagName == "P") {
      tgt = e.parentNode;
    } else if (e.tagName == "svg") {
      tgt = e.parentNode.parentNode;
    } else if (e.tagName == "path") {
      tgt = e.parentNode.parentNode.parentNode;
    }

    tgtItem = cart.indexOf(cart.find((item) => item[0].id == tgt.closest(".cart-card").id));
    cart.splice(tgtItem, 1);
    setCart([...cart]);
  }

  function handleButton(e) {
    const tgt = e.closest(".cart-card").id;
    const tgtItem = cart.indexOf(cart.find((item) => item[0].id == tgt));

    if (e.innerText == "-") {
      if (cart[tgtItem][1] <= 1) return;
      cart[tgtItem][1] = Number(cart[tgtItem][1]) - 1;
    } else if (e.innerText == "+") {
      cart[tgtItem][1] = Number(cart[tgtItem][1]) + 1;
    }
    setCart([...cart]);
  }
  
  if (cart.length > 0) {
    return (
      <main className="cart-content">
        {cart.map(item => {
          const detail = item[0];
          const quantity = item[1];
          return (
            <Card key={detail.id} itemId={detail.id} imgSrc={detail.image}
              imgAlt={detail.title} itemName={detail.title}
              handleDecrease={handleButton} totalPrice={"Total Price: $" +
                Number(detail.price) * Number(quantity)} handleIncrease={handleButton}
              handleRemove={handleItemRemove} itemQuantity={quantity} />
          )
        })}
      </main>
    ) 
  } else {
    return (
      <p>Cart is emtpy :)</p>
    )
  }
};
