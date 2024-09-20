import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
const store = configureStore({
    reducer:{
        
              [apiSlice.reducerPath]: apiSlice.reducer,
            //   cart: cartSliceReducer,
            //   auth: authReducer,
            },

    middleware: 
    (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
     devTools: true,
       
    
})

export default store