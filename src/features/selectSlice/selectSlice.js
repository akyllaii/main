import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios.js";


export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async (_,thunkAPI) => {
        try {
            const res = await axios('/projects')
                return res.data;
        }catch (err) {
           return  thunkAPI.rejectWithValue(err)
        }
    }
)

const initialState = {
    data: []
};

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
        state.status = 'loading'
    })
    builder.addCase(getProjects.fulfilled, (state,{payload}) => {
        state.data = payload
        state.status = true
    })
    builder.addCase(getProjects.rejected, (state,{payload}) => {
        state.error = payload
        state.status = 'error'
    })
}
});

export default projectSlice.reducer;