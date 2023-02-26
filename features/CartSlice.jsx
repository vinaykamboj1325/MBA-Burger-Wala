import { createSlice } from "@reduxjs/toolkit";
import {products} from "../assets/products"

const initialState = {
  items:{products},
  cartItems: [], 
  cartTotalAmount: 0,
  CartTotalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
      AddToCard(state, action) {
        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].cartQuanity += 1;
        } else {
          const tempcart = { ...action.payload, cartQuanity: 1 };
          state.cartItems.push(tempcart);
        }
      },
      removeCartItem(state, action) {
        const nextCartItem = state.cartItems.filter((cartitem) => cartitem.id !== action.payload.id);
        state.cartItems = nextCartItem;
      },
      increment(state, action) {
        const itemIndex = state.cartItems.findIndex(cartitem => cartitem.id === action.payload.id);
        state.cartItems[itemIndex].cartQuanity += 1;
      },
      decrement(state,action){
        const itemIndex = state.cartItems.findIndex(cartitem => cartitem.id === action.payload.id);
        if(state.cartItems[itemIndex].cartQuanity >1){
          state.cartItems[itemIndex].cartQuanity -=1;
        }else if(state.cartItems[itemIndex].cartQuanity =1){
          const nextCartItem = state.cartItems.filter((cartitem) => cartitem.id !== action.payload.id);
        state.cartItems = nextCartItem;
        }
      },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuanity } = cartItem;
        const itemTotal = price * cartQuanity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuanity;

        return cartTotal;
      },
        {
          total: 0,
          quantity: 0,
        })
      state.cartTotalAmount = total;
      state.CartTotalQuantity = quantity;
    }
  }

    


});

export const {AddToCard, removeCartItem, increment , decrement, getTotal} = cartSlice.actions;
 
export default cartSlice.reducer;