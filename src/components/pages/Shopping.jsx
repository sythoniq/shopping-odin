import {useState,useEffect} from 'react'
import Card from '../Card.jsx'

export default function Shopping() {
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
    console.log(e);
  }

  function handleIncrease(e) { 
    const tgt = document.getElementById(e.id).querySelector("input");
    if (tgt.value >= 0) {
      tgt.value++
    }
  }

  function handleDecrease(e) {
    const tgt = document.getElementById(e.id).querySelector("input");
    if (tgt.value != 0) {
      tgt.value--
    }
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
