import React, { Fragment, useContext, useState } from 'react'
import Category from './Category'
import Card from './Card'
import Cart from './Cart'
import CartContext from '../CartContext/Context'
const Main = () => {
    const { Items, totalAmount } = useContext(CartContext)

    return (
        <Fragment>
        
            <div  > 
                <div className=' flex gap-[1rem] px-[2rem] py-[2rem] ' >
                    <div className='flex flex-col w-[65vw] gap-[1rem] ' >
                        <div className='flex overflow-hidden gap-[.5rem] justify-center flex-col px-[2rem] rounded bg-white h-[8rem] '>
                            <p className=' font-[600] font-Sans ' > Choose from categories </p>
                            <div className='overflow-scroll overflow-y-hidden pb-3 ' >
                                <Category />
                            </div>
                        </div>
                        <div className=' overflow-scroll overflow-x-hidden rounded bg-white h-[40.98rem] '>
                            <div className=' py-[2rem] ml-[5rem] flex flex-wrap gap-[4rem] ' >
                                <Card />
                            </div>
                        </div>
                    </div>

                    <div className=' rounded bg-white  w-[40vw] h-[50rem]'>

                        <div className=' m-[7px] h-[100vh] flex flex-col gap-[.5rem] py-[.5rem] px-[.5rem] ' >
                            <div className='flex justify-between' >
                                <span className=' font-Sans font-[600] ' >Total Products :
                                </span>
                                <span className=' font-Sans font-[600] ' >{Items.length}</span>

                            </div>
                            <hr />
                            <div className='overflow-scroll rounded flex flex-col px-[7px] py-[.5rem] h-[100vh] bg-gray-100 gap-[.3rem] overflow-x-hidden'>
                                {
                                    Items.length === 0 ? <div className=' h-[100vh] flex justify-center items-center font-Sans text-xl font-[700] text-gray-300 ' > no item found for now </div> :
                                        <Cart />
                                }
                            </div>

                        </div>

                        <div className=' flex flex-col h-[13vh] items-center justify-center bg-gray-100 rounded mx-[1rem]  gap-[10px] ' >
                            <h1 className=' font-Sans font-[600] ' >Total Amount  </h1>
                            <p className=' font-Sans flex gap-[3rem] ' >
                                <span className='font-[600] text-gray-400 font-Sans'>Subtotal</span>
                                {totalAmount}
                            </p>
                        </div>
                        <div className=' flex justify-center mt-[1rem] ' >
                            <button className=' font-[600] bg-white border-[1px] text-[#ff6565] border-[#ff6565]  rounded hover:bg-[#ff6565] hover:text-white font-Sans px-[3.42rem] py-[9px] ' >Continue to Payment </button>
                        </div>
                    </div>
                </div>


            </div>
        </Fragment >
    )
}

export default Main
