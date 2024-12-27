    import { configureStore } from '@reduxjs/toolkit';
    import CartSlice from './Slice/CartSlice'
   import categorySlice from "./Slice/categorySlice"
   import SearchSlice from './Slice/SearchSlice' 
   const Store = configureStore({
      reducer: {
      
        cart: CartSlice, 

        category: categorySlice,

        search : SearchSlice,
      
      },
    });

    export default Store;
