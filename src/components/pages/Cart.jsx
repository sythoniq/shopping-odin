import {useOutletContext} from 'react-router';
import {useState} from 'react';

import {CartCard as Card} from '../Card.jsx'

export default function Cart() {
  const {list, box} = useOutletContext();

  const [cart, setCart] = box;

  function handleItemRemove(e) {
    console.log(e);
  }

  function handleButton(e) {
    console.log(e)
  }
  
  return (
    <main className="cart-content">
      {cart.map(item => {
        const detail = item[0];
        const quantity = item[1];
        return (
          <Card key={detail.id} itemId={detail.id} imgSrc={detail.image}
            imgAlt={detail.title} itemName={detail.title}
            handleDecrease={handleButton} totalPrice={"Total Price: " +
              Number(detail.price) * Number(quantity)} handleIncrease={handleButton}
            handleRemove={handleItemRemove} itemQuantity={quantity} />
        )
      })}
    </main>
  ) 
};
