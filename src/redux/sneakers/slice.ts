import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {SneakerState, Sneakers, Status} from './types'
import {fetchSneaker} from './asyncActions.ts'


const initialState: SneakerState = {
    items: [],
    status: Status.LOADING,
}

export const sneakerSlice = createSlice({
    name: 'sneaker',
    initialState,
    reducers: {
        setSneaker: (state, action: PayloadAction<Sneakers[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSneaker.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        })
        builder.addCase(fetchSneaker.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchSneaker.rejected, (state) => {
            state.items = []
            state.status = Status.REJECT
        })
    },
})

export const {setSneaker} = sneakerSlice.actions

export default sneakerSlice.reducer