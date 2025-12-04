import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout/Index";
import LoginLayout from "./layouts/LoginLayout/Index";

import Home from "./pages/Home";
import Activity from "./pages/activity/Index"
import Order from "./pages/order/Index"
import Profile from "./pages/account/Index";
// import ChangePassword from "./pages/account/ChangePassword";
import Language from "./pages/account/Language"
import Setting from "./pages/account/Setting";
import ReferralCode from "./pages/account/ReferralCode";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<MainLayout />}>
                    <Route index path="home" element={<Home />} />
                    <Route path="account" element={<Profile />} />
                    <Route path="activity" element={<Activity />} />
                    <Route path="order" element={<Order />} />
                    {/* <Route path="change_password" element={<ChangePassword />} /> */}
                    <Route path="language" element={<Language />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="referral_code" element={<ReferralCode />} />
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