import type { Theme, Components } from '@mui/material'

export const feedBackCustomizations: Components<Theme> = {
    MuiPaper: {
        styleOverrides: {
            root: () => {
                return {
                    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }
            }
        }
    }
}