import React, { Fragment } from 'react'

const Category = () => {
  const className = ' flex items-center font-Sans font-[500] text-sm whitespace-nowrap hover:border-[#ff6565] cursor-pointer hover:border-[1px] py-[10px] px-[30px] rounded hover:rounded bg-gray-100 hover:bg-white hover:text-[#ff6565]'
  return (
    <Fragment>
      <div className=' flex gap-[1.5rem] ' >
        <p className={className} >All items</p>
        <p className={className}  >Pizza</p>
        <p className={className}  >Burger</p>
        <p className={className}  >Rice</p>
        <p className={className}  >Dessert</p>
        <p className={className} >All items</p>
        <p className={className}  >Pizza</p>
        <p className={className}  >Burger</p>
        <p className={className}  >Rice</p>
        <p className={className}  >Dessert</p>
      </div>

    </Fragment>
  )
}

export default Category
