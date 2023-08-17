import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {CartState, cartSneaker} from "./types.ts";

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action: PayloadAction<cartSneaker>) => {
            const data = state.items.find(item => item.id === action.payload.id)

            if (data){
                data.count++
            }else{
                state.items.push({...action.payload, count: 1})
            }
        },
    },
})

export const { addItemCart } = cartSlice.actions

export default cartSlice.reducer