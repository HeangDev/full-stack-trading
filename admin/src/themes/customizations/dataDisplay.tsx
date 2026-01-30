import { alpha } from "@mui/material/styles";
import type { Theme, Components } from '@mui/material'

export const dataDisplayCustomizations: Components<Theme> = {
    MuiAvatar: {
        styleOverrides: {
            root: () => {
                return {
                    borderRadius: "6px",
                }
            }
        }
    },
    MuiChip: {
        styleOverrides: {
            root: ({ theme }) => ({
                display: "inline-flex",
                maxWidth: "max-content",
                minWidth: "24px",
                height: "24px",
                padding: "0 6px",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "6px",
                variants: [
                    {
                        props: {
                            color: "success",
                        },
                        style: {
                            color: (theme.vars || theme).palette.success.main,
                            backgroundColor: alpha(theme.palette.success.main, 0.2),
                        }
                    },
                    {
                        props: {
                            color: "error",
                        },
                        style: {
                            color: (theme.vars || theme).palette.error.main,
                            backgroundColor: alpha(theme.palette.error.main, 0.2),
                        }
                    }
                ],
            }),
            label: {
                padding: 0,
                lineHeight: "24px"
            }
        }
    },
    MuiDivider: {
        styleOverrides: {
            root: () => {
                return {
                    height: 1,
                    margin: "6px 0",
                    borderBottom: "1px solid #F1F1F4",
                }
            }
        }
    },
    MuiList: {
        styleOverrides: {
            root: () => {
                return {
                    padding: 0
                }
            }
        }
    },
    MuiListItem: {
        styleOverrides: {
            root: () => {
                return {
                    padding: 0,
                }
            }
        }
    },
    MuiListItemButton: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
            root: () => {
                return {
                    width: "100%",
                    height: "34px",
                    padding: "8px 12px",
                    color: "rgb(23, 23, 23)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "none",
                    "& svg": {
                        width: "18px",
                        height: "18px",
                        fontWeight: 700,
                        transition: "color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                }
            },
            selected: ({ theme }) => {
                return {
                    backgroundColor: (theme.vars || theme).palette.action.hover,
                }
            }
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: () => {
                return {
                    minWidth: "18px",
                    minHeight: "18px"
                }
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: ({theme}) => {
                return {
                    margin: "0",
                    [theme.breakpoints.up("xl")]: {
                        maxWidth: "100%",
                        opacity: 1
                    }
                }
            }
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: ({theme}) => {
                return {
                    borderBottom: `1px dashed ${(theme.vars || theme).palette.divider}`
                }
            }
        }
    },
    MuiTableHead: {
        styleOverrides: {
            root: ({theme}) => {
                return {
                    
                    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                }
            }
        }
    }
}