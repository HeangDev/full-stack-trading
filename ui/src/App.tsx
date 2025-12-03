import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout/Index";
import LoginLayout from "./layouts/LoginLayout/Index";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<MainLayout />}>
                    <Route index path="home" element={<Home />} />
                </Route>

                <Route element={<LoginLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="sign_up" element={<SignUp />} />
                </Route>
            </Routes>
        </>
    )
}

export default App