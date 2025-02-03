import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userSlice'
import productsReducer from './onlineShopSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer
    }
})