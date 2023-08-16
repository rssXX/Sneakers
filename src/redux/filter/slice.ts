import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {searchSneakersParams} from "./types.ts";

const initialState: searchSneakersParams = {
    page: 1,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
})

export const { setPage } = filterSlice.actions

export default filterSlice.reducer