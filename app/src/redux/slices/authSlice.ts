import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    loginAPI,
    registerAPI,
    logoutAPI,
    fetchUserProfileAPI,
    changePasswordAPI
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

export const loginUser = createAsyncThunk(
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

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        await logoutAPI();
    }
)

export const changePasswordUser = createAsyncThunk(
    "auth/change_password",
    async (payload: { current_password: string, new_password: string; confirm_password: string }) => {
        const res = await changePasswordAPI(payload);
        return res.data;
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        })
        .addCase(loginUser.rejected, (state, action) => {
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
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        })
        .addCase(changePasswordUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(changePasswordUser.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(changePasswordUser.rejected, (state) => {
            state.loading = false;
        })
    }
})

export default authSlice.reducer;