import React, { Fragment, useContext } from 'react'
import MealData from './MealData'
import CartContext from '../CartContext/Context'
const Card = () => {
  const { AddItems } = useContext(CartContext)

  const data = MealData.map(items => (
    <div className=' p-[.5rem] bg-gray-100 gap-2 flex flex-col rounded items-center ' key={items.id}>
      <div className=' h-[10rem] w-[12rem] ' >
        <img className=' rounded h-[100%] w-[100%] ' style={{
          objectFit: 'cover'
        }} src={items.image} alt="image" />
      </div>
      <p className=' font-Sans font-[600] ' >{items.title}</p>
      <p className=' font-Sans font-[500] ' >${items.price}</p>
      <button
        onClick={() => {
          AddItems({
            id: items.id,
            image: items.image,
            price: items.price,
            title: items.title,
            qty: items.qty
          }); 
        }}
        className=' font-[600] bg-white border-[1px] text-[#ff6565] border-[#ff6565]  rounded hover:bg-[#ff6565] hover:text-white font-Sans px-[3.42rem] py-[4px] ' >Add to cart </button>
    </div>
  ))

  return (
    <Fragment>
      {data}
    </Fragment>
  )
}

export default Card
