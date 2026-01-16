import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    loginAPI,
    registerAPI,
    logoutAPI,
    fetchUserProfileAPI
} from "../../api/auth.api";

export interface User {
    id: number;
    country_code: string;
    phone_number: string;
    password: string
    username: string;
    referral_code: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
}

export const login = createAsyncThunk(
    "auth/login",
    async (
        payload: { country_code: string, phone_number: string; password: string },
        { rejectWithValue }
    ) => {
        try {
        const res = await loginAPI(payload);
        return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload: { country_code: string, phone_number: string; password: string; username: string, referral_code: string }) => {
        const res = await registerAPI(payload);
        return res.data;
    }
)

export const fetchUserProfile = createAsyncThunk(
    "auth/me",
    async () => {
        const res = await fetchUserProfileAPI();
        return res.data;
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await logoutAPI();
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        })
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        })
    }
})

export default authSlice.reducer;