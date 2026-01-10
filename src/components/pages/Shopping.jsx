import {useState, useEffect} from 'react'
import {useOutletContext} from 'react-router'

import Card from '../Card.jsx'

export default function Shopping(props) {
  const {list, box} = useOutletContext();

  const [shopList, setShopList] = list;
  const [cart, setCart] = box;
	
	useEffect(() => {
			async function getData() {
				const res = await fetch('https://fakestoreapi.com/products')
				const data = await res.json()

				setShopList(data)
			}

		getData()
	}, [])

  function validateInput(e) {
    const tgtEle = document.getElementById(e.id);
    const tgtItem = shopList[e.id];
    
    const tgtInput = tgtEle.querySelector("input");

    if (tgtInput.value <= 0) return;
  
    setCart([...cart, [tgtItem, tgtInput.value]]);
  }

  function handleIncrease(e) { 
    const tgt = document.getElementById(e.id).querySelector("input");
    if (tgt.value >= 0) {
      tgt.value++
    }

    return tgt.value;
  }

  function handleDecrease(e) {
    const tgt = document.getElementById(e.id).querySelector("input");
    if (tgt.value != 0) {
      tgt.value--
    }

    return tgt.value;
  }

  if (shopList) {
    return (
      <main className="shopping-content">
        {shopList.map((item) => {
          return ( item.id < 13 &&
            <Card itemName={item.title} imgSrc={item.image} itemId={item.id}
              key={item.id} itemPrice={item.price}
              itemRating={item.rating.rate} handleInput={validateInput}
              handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
          )
        })}
      </main>
    )
  } else {
    return (
      <p>We couldnt fetch O_o</p>
    )
  }
}
