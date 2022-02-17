import { createSlice} from "@reduxjs/toolkit";
import getLocalStorage from "../util/helpers/getLocalStorage";
import {DARK} from "../actions/constants"

let theme = getLocalStorage("theme") ? getLocalStorage("theme") : DARK;
let initialState = theme ;

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
       change: (state, action) => state = action.payload
    }
})

export default themeSlice