import { createTheme } from "@mui/material";

declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        highlighted: true;
    }
}

const defaultTheme = createTheme();

export const colorSchemes = {
    light: {
        palette: {
            common: {
                white: "#f0f2f5"
            },
            primary: {
                main: "#99A1B7"
            },
            secondary: {
                main: "#7b809a"
            },
            info: {
                main: "#1A73E8"
            },
            success: {
                main: "#4CAF50"
            },
            warning: {
                main: "#fb8c00"
            },
            error: {
                main: "#f44335"
            },
            dark: {
                main: "#344767"
            },
            background: {
                paper: "rgba(255, 255, 255)",
                default: "rgb(245, 245, 245)"
            },
            text: {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgb(123, 128, 154)"
            },
            action: {
                hover: "#F9F9F9",
                selected: "#F9F9F9",
            },
            divider: "rgba(0, 0, 0, 0.12)"
        }
    }
}

export const typography = {
    fontFamily: '"Inter", "Helvetica", sans-serif',
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
    },
    h3: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 700,
    },
    h6: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 600,
    },
    button: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
    },
    body1: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 400,
    },
    body2: {
        fontSize: defaultTheme.typography.pxToRem(13),
        fontWeight: 500,
    },
    caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
    },
}

export const shape = {
    borderRadius: 8,
};

export const breakpoints = {
    values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    }
}

// @ts-ignore
const defaultShadows: Shadows = [
    'none',
    'var(--template-palette-baseShadow)',
    ...defaultTheme.shadows.slice(2),
];

export const shadows = defaultShadows;