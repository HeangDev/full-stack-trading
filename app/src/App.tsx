import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout/Index";
import LoginLayout from "./layouts/LoginLayout/Index";

import Home from "./pages/Home";
import StockDetail from "./pages/stock/Index"
import Market from "./pages/markets/Index"
import Order from "./pages/order/Index"
import Profile from "./pages/account/Index";
import History from "./pages/account/History";
import Bank from "./pages/account/Bank";
import ChangePassword from "./pages/account/ChangePassword";
import Language from "./pages/account/Language"
import ReferralCode from "./pages/account/ReferralCode";
import Notification from "./pages/account/Notification";
import Deposit from "./pages/account/Deposit";
import Withdraw from "./pages/account/Withdraw";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<MainLayout />}>
                    <Route index path="home" element={<Home />} />
                    <Route path="stock/:id" element={<StockDetail />} />
                    <Route path="account" element={<Profile />} />
                    <Route path="market" element={<Market />} />
                    <Route path="history" element={<History />} />
                    <Route path="bank" element={<Bank />} />
                    <Route path="order" element={<Order />} />
                    <Route path="change_password" element={<ChangePassword />} />
                    <Route path="language" element={<Language />} />
                    <Route path="referral_code" element={<ReferralCode />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="deposit" element={<Deposit />} />
                    <Route path="withdraw" element={<Withdraw />} />
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