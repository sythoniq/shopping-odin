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
  console.log(shopList)
  return (
		<>
      {shopList.map((item) => {
        return (
          <Card itemName={item.title} imgSrc={item.image} itemId={item.id}
          key={item.id} itemDesc={item.description} itemPrice={item.price}
            itemRating={item.rating.rate} />
        )
      })}
		</>
  )
}
