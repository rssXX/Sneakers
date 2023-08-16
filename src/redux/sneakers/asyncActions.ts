import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { Sneakers } from "./types";
import {searchSneakersParams} from "../filter/types.ts";

export const fetchSneaker = createAsyncThunk<Sneakers[], searchSneakersParams>(
    "sneaker/fetchSneakersStatus",
    async (params) => {
        const { page } = params;
        const { data } = await axios.get(`https://64c3ad1567cfdca3b66017c0.mockapi.io/sneakers?limit=4&page=${page}`);

        return data;
    }
);
