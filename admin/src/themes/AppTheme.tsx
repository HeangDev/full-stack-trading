import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './customizations/inputs';
import { surfacesCustomizations } from './customizations/surfaces';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { navigationCustomizations } from './customizations/navigation';
import { utilsCustomizations } from './customizations/utils';
import { LayoutCustomizations } from './customizations/layout';
import { colorSchemes, typography, shape, breakpoints, shadows } from './themePrimitives';

interface AppThemeProps {
    children: React.ReactNode;
    disableCustomTheme?: boolean;
    themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
    const { children, disableCustomTheme, themeComponents } = props
    const theme = React.useMemo(() => {
        return disableCustomTheme
        ? {}
        : createTheme({
            cssVariables: {
                cssVarPrefix: "template",
            },
            colorSchemes,
            typography,
            shape,
            breakpoints,
            shadows,
            components: {
                ...inputsCustomizations,
                ...surfacesCustomizations,
                ...dataDisplayCustomizations,
                ...navigationCustomizations,
                ...utilsCustomizations,
                ...LayoutCustomizations
            }
        })
    }, [disableCustomTheme, themeComponents])

    if (disableCustomTheme) {
        return <React.Fragment>{children}</React.Fragment>
    }
    return (
        <ThemeProvider theme={theme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}