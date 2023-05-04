import React, { Fragment } from 'react'

const Navbar = () => {
    return (
        <Fragment>
            <div className='flex items-center bg-white justify-around py-[1rem] ' >
                <div>
                    <div className='font-Sans' >Logo</div>
                </div>
                <div className=' flex items-center ' >
                    <input className=' font-Sans rounded bg-gray-100  w-[40rem] py-[.5rem]  px-[1rem] outline-none ' placeholder='Search Category or Menu...' type="search" />
                    <span className=" cursor-pointer rounded material-symbols-outlined p-[.5rem] bg-yellow-400 text-white   ">
                        search
                    </span>
                </div>

                <div className=' flex gap-[2rem] ' >
                    <button>
                        <span className="material-symbols-outlined rounded text-white bg-yellow-400 p-[.5rem] ">
                            qr_code_2
                        </span>
                    </button>
                    <button>
                        <span className="material-symbols-outlined rounded text-white bg-yellow-400 p-[.5rem] ">
                            notifications
                        </span>
                    </button>
                    <button className='flex font-Sans gap-[5pxrem] bg-red-500 shadow-xl p-[.5rem] rounded text-white items-center' >
                        <span className="material-symbols-outlined rounded text-white">
                            add
                        </span>
                        Add New Items
                    </button>
                </div>
                <p className='font-Sans' >Order # 245</p>
            </div>
        </Fragment>
    )
}

export default Navbar
