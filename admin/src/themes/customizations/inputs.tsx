import type { Theme, Components } from '@mui/material'
import { alpha } from "@mui/material/styles";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export const inputsCustomizations: Components<Theme> = {
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: "none"
            },
            input: {
                '&::placeholder': {
                    opacity: 0.7,
                }
            }
        }
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                },
                '& input[type=number]': {
                    MozAppearance: 'textfield',
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: "0",
            },
            root: ({ theme }) => ({
                fontSize: "14px",
                padding: "8px 12px",
                color: (theme.vars || theme).palette.text.primary,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                transition: 'border 120ms ease-in',
                '&:hover': {
                    borderColor: (theme.vars || theme).palette.info.main,
                },
                [`&.${outlinedInputClasses.focused}`]: {
                    borderColor: (theme.vars || theme).palette.info.main,
                },
                '&.Mui-error': {
                    border: `1px solid ${(theme.vars || theme).palette.error.main}`,
                },
                variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            height: '36px',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '40px',
                        },
                    },
                ],
            }),
            notchedOutline: {
                border: "none"
            },
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                position: "relative",
                maxWidth: "100%",
                marginBottom: "4px",
                fontSize: "14px",
                fontWeight: 400,
                color: (theme.vars || theme).palette.text.primary,
                lineHeight: 1.6,
                transform: "none",
            }),
            asterisk: ({ theme }) => ({
                color: (theme.vars || theme).palette.error.main,
            })
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: ({ theme }) => ({
                width: "100%",
                marginTop: "6px",
                marginLeft: 0,
                marginRight: 0,
                fontSize: "12px",
                color: (theme.vars || theme).palette.error.main,
            })
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                color: (theme.vars || theme).palette.primary,
                lineHeight: 1,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: "transparent",
                boxShadow: 'none',
                [theme.breakpoints.down('xl')]: {
                    width: "35px",
                    height: "35px",
                },
                [theme.breakpoints.up('xl')]: {
                    width: "40px",
                    height: "40px",
                },
                variants: [
                    {
                        props: {
                            size: "small",
                        },
                        style: {
                            width: "32px",
                            height: "32px",
                        }
                    }
                ],
                '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.action.selected,
                },
            })
        }
    },
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
             root: () => ({
                boxSizing: 'border-box',
                transition: 'all 100ms ease-in',
             })
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: "none",
                borderRadius: (theme.vars || theme).shape.borderRadius,
                textTransform: "none",
                variants: [
                    {
                        props: {
                            size: "small"
                        },
                        style: {
                            height: "36px",
                        }
                    },
                    {
                        props: {
                            size: "medium"
                        },
                        style: {
                            height: "40px",
                        }
                    },
                    {
                        props: {
                            color: "primary",
                            variant: 'contained'
                        },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.info.main,
                            color: (theme.vars || theme).palette.common.white,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.info.main, 0.8)
                            },
                        }),
                    },
                    {
                        props: {
                            color: "secondary",
                            variant: 'contained'
                        },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.background.default,
                            color: (theme.vars || theme).palette.primary.main,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.secondary.main, 0.1)
                            },
                        }),
                    },
                    {
                        props: { color: "error" },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.error.main,
                            color: (theme.vars || theme).palette.common.white,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.error.main, 0.8)
                            },
                        }),
                    },
                    {
                        props: { color: "success" },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.success.main,
                            color: (theme.vars || theme).palette.common.white,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.success.main, 0.8)
                            },
                        }),
                    },
                ],
                '&:hover': {
                    boxShadow: "none",
                },
            })
        }
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true,
            icon: (
                <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }} />
            ),
            checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
            indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                margin: 10,
                width: 16,
                height: 16,
                borderRadius: 5,
                border: '1px solid ',
                borderColor: (theme.vars || theme).palette.secondary.main,
                transition: 'border-color, background-color, 120ms ease-in',
                '&:hover': {
                    borderColor: (theme.vars || theme).palette.info.main,
                },
                '&.Mui-checked': {
                    color: (theme.vars || theme).palette.common.white,
                    backgroundColor: (theme.vars || theme).palette.info.main,
                    borderColor: (theme.vars || theme).palette.info.main,
                    boxShadow: `none`,
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.info.main, 0.8),
                        borderColor: alpha(theme.palette.info.main, 0.8)
                    },
                }
            }),
            indeterminate: ({ theme }) => ({
                color: (theme.vars || theme).palette.common.white,
                backgroundColor: (theme.vars || theme).palette.info.main,
                borderColor: (theme.vars || theme).palette.info.main,
            }),
        }
    }
}