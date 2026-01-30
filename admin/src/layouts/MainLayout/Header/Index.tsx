import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Stack from '@mui/material/Stack';
import { Icon } from "@iconify/react";

import HeaderAvatar from './HeaderAvatar';
import HeaderLanguage from './HeaderLanguage';
import HeaderNotification from './HeaderNotification';
import HeaderDarkMode from './HeaderDarkMode';

interface ElevationProps {
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
}

interface HeaderProps {
    onToggleSidebar: () => void;
    window?: () => Window;
}

function ElevationScroll(props: ElevationProps) {
    const { children, window } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
    : null;
}

export default function Header({ onToggleSidebar, window }: HeaderProps) {
    return (
        <>
            <ElevationScroll window={window}>
                <AppBar position="sticky" color="inherit">
                    <Toolbar
                        sx={(theme) => ({
                            [theme.breakpoints.down('xl')]: {
                                justifyContent: "space-between"
                            },
                            [theme.breakpoints.up('xl')]: {
                                justifyContent: "flex-end"
                            }
                        })}
                    >
                        <Stack>
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    left: "-8px",
                                    display: { xl: "none" }
                                }}
                                onClick={onToggleSidebar}><Icon icon="solar:hamburger-menu-line-duotone" /></IconButton>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={(theme) => ({
                                alignItems: "stretch",
                                justifyContent: "flex-end",
                                flexShrink: 0,
                                [theme.breakpoints.down('xl')]: {
                                    height: "60px"
                                },
                                [theme.breakpoints.up('xl')]: {
                                    height: "70px"
                                }
                            })}
                        >
                            <HeaderNotification/>
                            <HeaderLanguage/>
                            <HeaderDarkMode/>
                            <HeaderAvatar/>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}