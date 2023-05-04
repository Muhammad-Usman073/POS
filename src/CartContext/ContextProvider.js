import React, { useReducer } from 'react'
import CartContext from './Context'

const defaultCartState = {
    items: [],
    totalPrice: 0,
}
// if item already exist then just increase the amount of product and price of existing product.
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatePrice = state.totalAmount + action.item.price
            console.log(updatePrice)
            const existingProductId = state.items.findIndex(currItem => {
                return currItem.id === action.item.id
            })
            const existingProduct = state.items[existingProductId]
            if (existingProduct) {
                const updatedItem = {
                    ...existingProduct,
                    qty: existingProduct.qty + 1
                }
                const updatedItems = [...state.items];
                updatedItems[existingProductId] = updatedItem;
                return {
                    ...state,
                    items: updatedItems
                };
            }
            else {
                // If the product doesn't exist in the cart, add it
                const newItem = {
                    ...action.item,
                    qty: 1
                };
                return {
                    ...state,
                    items: state.items.concat(newItem),
                    totalPrice: updatePrice
                };
            }



        case 'QTYINC':
            var newItems = state.items.map(curr => {
                if (curr.id === action.payload) {
                    return {
                        ...curr,
                        qty: curr.qty + 1
                    }
                }
                return curr
            })
            return {
                ...state,
                items: newItems
            }

        case 'QTYDEC':
            var newItem = state.items.map(curr => {
                // Check if current item's id matches the id of the item whose qty needs to be decreased
                if (curr.id === action.payload) {
                    // Check if current item's qty is 1
                    if (curr.qty === 1) {
                        // If qty is 1, remove the item from the cart by filtering out items with qty > 0
                        return null;
                    } else {
                        // If qty is greater than 1, decrement the qty by 1
                        return {
                            ...curr,
                            qty: curr.qty - 1
                        }
                    }
                } else {
                    // Return the current item as is if it doesn't match the id of the item whose qty needs to be decreased
                    return curr;
                }
            }).filter(item => item !== null); // Filter out any null values from the updated items array

            // Calculate the new total price of the updated cart


            return {
                items: newItem,
            }

        case 'REMOVE_CART_ITEM':
            const filtItems = state.items.filter(curr => {
                return curr.id !== action.payload
            })
            return {
                items: filtItems
            }

    }
}
const ContextProvider = ({ children }) => {
    //useReducer hook
    const [cart, dispatch] = useReducer(cartReducer, defaultCartState)

    // Add to cart Handler

    const addToCartHandler = (item) => {
        console.log(item.id)
        dispatch({ type: 'ADD_TO_CART', item: item })
    }

    const QtyInc = (id) => {
        dispatch({ type: 'QTYINC', payload: id })
    }
    const QtyDec = (id) => {
        dispatch({ type: 'QTYDEC', payload: id })
    }

    const removeCartItem = (id) => {
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id })
    }

    const cartProvider = {
        Items: cart.items,
        totalAmount: cart.totalPrice,
        AddItems: addToCartHandler,
        IncreaseQty: QtyInc,
        DecreaseQty: QtyDec,
        removeCartItem: removeCartItem
    }
    return (
        <CartContext.Provider value={cartProvider} >
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider
