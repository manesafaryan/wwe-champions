import { createSlice} from "@reduxjs/toolkit";
import getLocalStorage from "../util/helpers/getLocalStorage";
import {en} from "../actions/constants"

let lang = getLocalStorage("lang") ? getLocalStorage("lang") : en;
let initialState = lang ;

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
       change: (state, action) => state = action.payload
    }
})

export default langSlice