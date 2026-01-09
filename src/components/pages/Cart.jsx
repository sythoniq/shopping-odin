import {useState} from 'react';

export function addItemToCart(item, quantity) {
  console.log(cartList);
  console.log(value, quantity);
}

export default function Cart() {
  const [cartList, setCartList] = useState()
  return(
    <p> Hi from cart</p>
  )
};
