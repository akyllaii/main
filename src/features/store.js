import {configureStore} from "@reduxjs/toolkit";
import product from './product/product';
import resetPassword from "./resetPassword/resetPassword"
import {rememberReducer,rememberEnhancer} from "redux-remember";
import projectSlice from './selectSlice/selectSlice.js'
import cartSlice from './cartSlice/cartSlice.js'



const rememberedKeys = ['product']

export const store = configureStore({
    reducer: rememberReducer({
        product,
        resetPassword,
        projectSlice,
        cartSlice
    }),
    enhancers: [rememberEnhancer(window.localStorage,rememberedKeys, {persistWholeStore: true})]
})