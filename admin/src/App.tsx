import { Routes, Route } from "react-router";
import AppTheme from "./themes/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

import MainLayout from './layouts/MainLayout/Index'
import LoginLayout from './layouts/LoginLayout/Index';

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";

const App = (props: { disableCustomTheme?: boolean }) => {
    return (
        <>
            <AppTheme {...props}>
                <CssBaseline/>
                    <Routes>
                        <Route element={<LoginLayout />}>
                            <Route path="/login" element={<Login />} />
                        </Route>
                        <Route element={<MainLayout />}>
                            <Route index path="dashboard" element={<Dashboard />} />
                        </Route>
                    </Routes>
            </AppTheme>
        </>
    )
}

export default App