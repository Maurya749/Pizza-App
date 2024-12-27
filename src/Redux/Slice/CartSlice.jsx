import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItems = state.cart.find(
        (item) => item.id == action.payload.id
      );

      if(existingItems)
      {
        state.cart = state.cart.map((item)=>
          item.id === action.payload.id ?{...item, qty: item.qty+1 }:item);

      }
      else{

        state.cart.push(action.payload);
      }

      },

     
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty:(state, action)=>{

      state.cart=state.cart.map((item)=>
      
       item.id===action.payload.id?{...item, qty:item.qty+1}:item

       

      )
    },
    decrementQty:(state, action)=>{

      state.cart=state.cart.map((item)=>
      
       item.id===action.payload.id?{...item, qty:item.qty-1}:item

       

      )
    },

  },
});

// Exporting the actions
export const { addToCart, incrementQty,decrementQty, removeFromCart } = cartSlice.actions;

// Exporting the reducer
export default cartSlice.reducer;
