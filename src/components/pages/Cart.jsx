import {useOutletContext} from 'react-router';
import {useState} from 'react';

export default function Cart() {
  const {list, box} = useOutletContext();

  const [cart, setCart] = box;
  
  console.log(cart);

  return(
    <p> Hi from cart</p>
  )
};
