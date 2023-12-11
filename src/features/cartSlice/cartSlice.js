// import { createSlice } from "@reduxjs/toolkit";
// import axios from "../../utils/axios.js";
//
// const addToCartServer = async (productId) => {
//     try {
//         const response = await axios('/cart', {
//             productId
//         });
//
//         console.log(response.data.message);
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// const initialState = {
//     items: []
// };
//
// const cartSlice = createSlice({
//     name: 'cartSlice',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             state.items.push(action.payload);
//         },
//         removeFromCart: (state, action) => {
//             state.items = state.items.filter(item => item.id !== action.payload.id);
//         },
//     }
// });
//
// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
// export {addToCartServer}