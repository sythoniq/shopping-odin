import {addItemToCart} from './Cart.jsx';
import Card from '../Card.jsx'
import {useState, useEffect} from 'react'

export default function Shopping(props) {
	const [shopList, setShopList] = useState([])
	// Will give us a title, an id, a price, a description and an image
	
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
  
    addItemToCart(tgtItem, tgtInput.value);
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
}
