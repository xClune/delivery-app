import { ActionTypes, CartType } from "../types/types"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

 const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
 }

 export const useCartStore = create(persist<CartType & ActionTypes>((set, get) => ({
    // initialise constants
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,

    // spread previous items and add new item
    addToCart: (item) => {
        const products = get().products
        // check if product is already being stored in cart state
        const productInState = products.find((product) => product.id === item.id)
        // if product is already in state, update the quantity and price
        if(productInState) {

            const updatedProducts = products.map(product=> product.id === productInState.id ? {
                ...item,
                quantity: product.quantity + item.quantity,
                price: product.price + item.price,
            } : item
        );
        set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price
        }))

        // else add the new item to the cart state
        } else {
            set((state) => ({
                products:[...state.products, item],
                    totalItems:state.totalItems+item.quantity,
                    totalPrice:state.totalPrice+item.price
            }))
        }
        
    },

    // filter out the item from the cart
    removeFromCart: (item) => {
        set((state) => ({
            products: state.products.filter((product) => product.id !== item.id),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price
        }))
    },

    resetCart: () => {
        set(INITIAL_STATE)
    }
    
 }), {name: "cart", skipHydration: true}))
