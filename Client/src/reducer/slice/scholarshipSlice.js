// redux/slices/scholarshipSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API/axios";

// =======================
// CREATE
// =======================
export const createScholarship = createAsyncThunk(
    "scholarship/create",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await API.post("/scholarship", formData);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// GET ALL
// =======================
export const getScholarships = createAsyncThunk(
    "scholarship/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/scholarship");
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// DELETE
// =======================
export const deleteScholarship = createAsyncThunk(
    "scholarship/delete",
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/scholarship/${id}`);
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// SLICE
// =======================
const scholarshipSlice = createSlice({
    name: "scholarship",
    initialState: {
        loading: false,
        data: [],
        error: null,
        success: false,
    },

    reducers: {
        resetState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },

    extraReducers: (builder) => {
        builder

            // CREATE
            .addCase(createScholarship.pending, (state) => {
                state.loading = true;
            })
            .addCase(createScholarship.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.data.unshift(action.payload.data);
            })
            .addCase(createScholarship.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Something went wrong";
            })

            // GET
            .addCase(getScholarships.pending, (state) => {
                state.loading = true;
            })
            .addCase(getScholarships.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getScholarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // DELETE
            .addCase(deleteScholarship.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (item) => item._id !== action.payload
                );
            });
    },
});

export const { resetState } = scholarshipSlice.actions;
export default scholarshipSlice.reducer;