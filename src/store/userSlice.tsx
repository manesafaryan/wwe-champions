import { createSlice} from "@reduxjs/toolkit";
import getLocalStorage from "../util/helpers/getLocalStorage";

let currentUser = getLocalStorage("currentUser") ? getLocalStorage("currentUser") : null;
let initialState = currentUser ;

const userSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
       failedLogin: (state) => state = null,
       successLogin: (state, action) => state = action.payload
    }
})

export default userSlice