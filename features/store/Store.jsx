import {configureStore} from "@reduxjs/toolkit";
import CartSlice, { getTotal } from "../CartSlice";

const store = configureStore({
    reducer:{
        cart: CartSlice,

    }
});
store.dispatch(getTotal())
export default store;