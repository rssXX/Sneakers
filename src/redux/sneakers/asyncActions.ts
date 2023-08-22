import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { Sneakers } from "./types";
import {searchSneakersParams} from "../filter/types.ts";

export const fetchSneaker = createAsyncThunk<Sneakers[], searchSneakersParams>(
    "sneaker/fetchSneakersStatus",
    async (params) => {
        const { page, search } = params;
        const searchValue = search.length >= 1 ? `&search=${search}` : "";
        const { data } = await axios.get(`https://64c3ad1567cfdca3b66017c0.mockapi.io/sneakers?limit=4&page=${page}${searchValue}`);

        return data;
    }
);
