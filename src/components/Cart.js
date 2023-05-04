import { Fragment, useContext, useReducer } from "react"
import CartContext from "../CartContext/Context"
const Cart = () => {
    const { Items, IncreaseQty, DecreaseQty,removeCartItem} = useContext(CartContext)
    return (
        <Fragment>
            {
                Items.map((product) => (
                    <div key={product.id} className=' bg-white rounded flex p-[7px] gap-[2rem] ' >
                        <div className=' w-[5rem] h-[4rem] ' >
                            <img className=' rounded w-[100%] h-[100%] ' style={{
                                objectFit: 'cover'
                            }} src={product.image} alt="Hawaiian" />
                        </div>
                        <div>
                            <div className="flex justify-between cursor-pointer " >
                                <p className=' font-[600] font-Sans ' >{product.title}</p>
                                <span onClick={()=>removeCartItem(product.id)} className="material-symbols-outlined">
                                    close
                                </span>
                            </div>
                            <div className=" flex items-center pt-3 gap-[3rem] " >
                                <p className=' font-Sans ' >${product.price}</p>
                                <div className="flex"  >
                                    <button onClick={() => IncreaseQty(product.id)} className=" flex items-center justify-center border-t-[1px] border-black border-b-[1px] border-l-[1px] w-[1.7rem]" >
                                        +
                                    </button>
                                    <div className=' flex items-center justify-center w-[1.8rem] h-[1.8rem] outline-none border-[1px] border-black ' type="text">
                                        {product.qty}
                                    </div>
                                    <button
                                        onClick={() => {
                                            DecreaseQty(product.id)
                                        }} className=" flex items-center justify-center border-t-[1px] border-black border-b-[1px] border-r-[1px] w-[1.7rem]" >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </Fragment>
    )
}

export default Cart
