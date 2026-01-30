import type { Theme, Components } from '@mui/material'

export const LayoutCustomizations: Components<Theme> = {
    MuiGrid: {
        styleOverrides: {
            root: () => {
                return {
                    flexGrow: 0,
                    flexBasis: "auto",
                    minWidth: 0,
                    width: `calc(
                        (100% * 12 / var(--Grid-parent-columns)) -
                        ((var(--Grid-parent-columns) - 12) *
                        (var(--Grid-parent-columnSpacing) / var(--Grid-parent-columns)))
                    )`,
                    boxSizing: "border-box",
                }
            }
        }
    }
}