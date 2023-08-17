import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {CartState, cartSneaker} from "./types.ts";

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // сделать одну функцию
        addItemCart: (state, action: PayloadAction<cartSneaker>) => {
            const data = state.items.find(item => item.id === action.payload.id)

            if (data){
                data.count++
            }else{
                state.items.push({...action.payload, count: 1})
            }
        },
        plusCountItemCart: (state, action: PayloadAction<number>) => {
            const data = state.items.find(item => item.id === action.payload)

            if (data){
                data.count++
            }
        },
        minusCountItemCart: (state, action: PayloadAction<number>) => {
            const data = state.items.find(item => item.id === action.payload)

            if (data){
                data.count--
            }
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addItemCart, plusCountItemCart, minusCountItemCart, clearCart } = cartSlice.actions

export default cartSlice.reducer