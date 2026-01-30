import type { Theme, Components } from '@mui/material'

export const surfacesCustomizations: Components<Theme> = {
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => {
                return {
                    display: "grid",
                    alignItems: "center",
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                    boxShadow: "0px 10px 30px 0px rgba(82, 63, 105, 0.05)",
                    [theme.breakpoints.down("xl")]: {
                        minHeight: "60px",
                        padding: "0 20px"
                    },
                    [theme.breakpoints.up("xl")]: {
                        minHeight: "70px",
                        padding: "0 30px"
                    },
                }
            }
        }
    },
    MuiToolbar: {
        styleOverrides: {
            root: ({ theme }) => {
                return {
                    justifyContent: "space-between",
                    padding: 0,
                    [theme.breakpoints.up("sm")]: {
                        padding: 0,
                        minHeight: "0",
                    },
                    [theme.breakpoints.down("md")]: {
                        minHeight: "60px",
                    },
                }
            }
        }
    }
}