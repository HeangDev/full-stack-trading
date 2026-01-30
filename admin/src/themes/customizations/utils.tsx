import type { Theme, Components } from '@mui/material'

export const utilsCustomizations: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                scrollbarColor: "transparent",
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                    backgroundColor: "transparent",
                    width: 6,
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                    borderRadius: 4,
                    backgroundColor: "#F1F1F4",
                    minHeight: 18,
                },
                "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#DBDFE9",
                },
            }
        }
    },
    MuiModal: {
        styleOverrides: {
            root: {
                margin: "8px"
            }
        }
    },
    MuiPopper: {
        styleOverrides: {
            root: ({ theme }) => ({
                zIndex: 1300,
                '&[data-popper-placement="bottom-end"]': {
                    [theme.breakpoints.down('xl')]: {
                        transform: "translate(-20px, 60px) !important",
                    },
                    [theme.breakpoints.up('xl')]: {
                        transform: "translate(-30px, 70px) !important",
                    },
                }
            })
        }
    }
}