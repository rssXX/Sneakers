import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {searchSneakersParams} from "./types.ts";

const initialState: searchSneakersParams = {
    page: 1,
    search: "",
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
})

export const { setPage, setSearch } = filterSlice.actions

export default filterSlice.reducer