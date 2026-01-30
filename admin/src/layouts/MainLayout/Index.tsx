import { useState } from "react";
import { Outlet } from 'react-router'
import Box from "@mui/material/Box"

import Header from "./Header/Index"
import Toolbar from "./Toolbar/Index"
import Sidebar from "./Sidebar/Index"
import Footer from "./Footer/Index"

const MainLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
    };


    return (
        <>
            <Sidebar open={open} onClose={toggleSidebar}/>
            <Box
                sx={(theme) => ({
                    position: "relative",
                    height: "100vh",
                    color: "rgb(23, 23, 23)",
                    backgroundColor: "transparent",
                    opacity: 1,
                    transition: { xl: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)" },
                    [theme.breakpoints.down('xl')]: {
                        marginLeft: "0",
                    },
                    [theme.breakpoints.up('xl')]: {
                        marginLeft: "265px",
                    },
                })}
            >
                <Header onToggleSidebar={toggleSidebar}/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minWidth: 0
                    }}
                >
                    <Toolbar/>
                    <Box
                        sx={(theme) => ({
                            [theme.breakpoints.down('xl')]: {
                                paddingLeft: "20px",
                                paddingRight: "20px",
                            },
                            [theme.breakpoints.up('xl')]: {
                                paddingLeft: "30px",
                                paddingRight: "30px",
                            },
                        })}
                    >
                        <Outlet/>
                    </Box>
                    <Footer/>
                </Box>
            </Box>
        </>
    )
}

export default MainLayout