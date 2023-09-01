import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
    "users/getUsers",
    async (_,fetchApi) => {
        try {
            const res = await axios('http://localhost:4444/users')
            return res.data
        }catch (err) {
            fetchApi.rejectWithValue(err)
        }
    }
)

const productsSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        authUser: (state,action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logOutUser: (state,action) => {
            state.user = null
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.isLoading = true
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const {authUser,logOutUser} = productsSlice.actions
export default productsSlice.reducer