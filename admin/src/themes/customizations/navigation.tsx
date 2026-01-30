import type { Theme, Components } from '@mui/material'

export const navigationCustomizations: Components<Theme> = {
    MuiBreadcrumbs: {
        styleOverrides: {
            root: () => {
                return {
                    lineHeight: "32px",
                }
            },
            li: () => {
                return {
                    lineHeight: 0
                }
            },
            separator: ({ theme }) => {
                return {
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
                    width: "222px",
                    height: "calc(-16px + 100vh)",
                    margin: 8,
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    borderRight: "none",
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                    transform: "translateX(-20rem)",
                    transition: "transform 200ms cubic-bezier(0.4, 0, 0.6, 1)",
                    [theme.breakpoints.up("xl")]: {
                        width: "222px",
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