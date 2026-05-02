import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API/axios";

// =======================
// REGISTER
// =======================
export const registerAdmin = createAsyncThunk(
    "admin/register",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await API.post("/auth/register", formData);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// LOGIN
// =======================
export const loginAdmin = createAsyncThunk(
    "admin/login",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await API.post("/auth/login", formData);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// GET PROFILE (AUTH CHECK)
// =======================
export const getProfile = createAsyncThunk(
    "admin/profile",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/auth/me");
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// LOGOUT
// =======================
export const logoutAdmin = createAsyncThunk(
    "admin/logout",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.post("/auth/logout");
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data);
        }
    }
);

// =======================
// SLICE
// =======================
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        loading: false,
        admin: null,
        isAuthenticated: false,
        error: null,
        success: false,
        checked: false, // 🔥 VERY IMPORTANT
    },

    reducers: {
        resetAdminState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },

    extraReducers: (builder) => {
        builder

            // =======================
            // REGISTER
            // =======================
            .addCase(registerAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerAdmin.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // =======================
            // LOGIN
            // =======================
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.isAuthenticated = true;
                state.admin = action.payload?.admin || null;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
                state.isAuthenticated = false;
            })

            // =======================
            // GET PROFILE (IMPORTANT)
            // =======================
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.checked = false;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload.admin;
                state.isAuthenticated = true;
                state.checked = true; // ✅ AUTH CHECK COMPLETE
            })
            .addCase(getProfile.rejected, (state) => {
                state.loading = false;
                state.admin = null;
                state.isAuthenticated = false;
                state.checked = true; // ✅ EVEN ON FAIL
            })

            // =======================
            // LOGOUT
            // =======================
            .addCase(logoutAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAdmin.fulfilled, (state) => {
                state.loading = false;
                state.admin = null;
                state.isAuthenticated = false;
                state.checked = true; // 🔥 still checked
            })
            .addCase(logoutAdmin.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;