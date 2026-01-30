import type { Theme, Components } from '@mui/material'

export const navigationCustomizations: Components<Theme> = {
    MuiBreadcrumbs: {
        styleOverrides: {
            li: () => {
                return {
                    lineHeight: 0
                }
            },
            separator: ({ theme }) => {
                return {
                    marginLeft: "6px",
                    marginRight: "6px",
                    fontSize: "14px",
                    color: (theme.vars || theme).palette.secondary.main,
                }
            }  
        }
    },
    MuiLink: {
        styleOverrides: {
            root: () => {
                return {
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "none",
                    },
                }
            }
        }
    },
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme }) => {
                return {
                    width: "265px",
                    backgroundColor: "#202B46",
                    transform: "translateX(-20rem)",
                    transition: "transform 200ms cubic-bezier(0.4, 0, 0.6, 1)",
                    [theme.breakpoints.up("xl")]: {
                        width: "265px",
                        transform: "translateX(0px)",
                        transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1), background-color 225ms cubic-bezier(0.4, 0, 0.6, 1)"
                    }
                }
            }
        }
    },
    MuiMenu: {
        styleOverrides: {
            paper: ({ theme }) => {
                return {
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                }
            },
        }
    },
    MuiMenuItem: {
        styleOverrides: {
            root: () => {
                return {
                    padding: "2px 16px 0 16px"
                }
            }
        }
    }
}  