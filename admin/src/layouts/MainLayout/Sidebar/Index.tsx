import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link as RouterLink } from 'react-router'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Icon } from "@iconify/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { navData } from './SidebarMenu';


const Sidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggle = (label: string) => {
        setOpenMenu(prev => (prev === label ? null : label));
    };

    const handleNavigate = (href: string) => {
        if (!href.startsWith("/")) href = "/" + href;
        navigate(href);
        if (!isDesktop) {
            onClose();
        }
    };

    useEffect(() => {
        let parentFound: string | null = null;

        navData.forEach(section => {
            section.items.forEach(item => {
                if (item.subMenu?.some(sub => location.pathname.startsWith(`/${sub.href}`))) {
                    parentFound = item.label;
                }
            });
        });

        setOpenMenu(parentFound);
    }, [location.pathname]);

    return (
        <>
            <Drawer
                open={open}
                onClose={onClose}
                variant={isDesktop ? "permanent" : "temporary"}
                sx={{
                    whiteSpace: "nowrap",
                    border: "none"
                }}
            >
                <Box
                    sx={(theme) => ({
                        paddingX: "20px",
                        [theme.breakpoints.up('xl')]: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            height: "70px",
                            borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                        },
                    })}
                >
                    <Avatar alt="" src="https://keenthemes.com/keen/demo1/assets/media/logos/default-dark.svg" sx={{ width: "auto", height: "30px" }}/>
                </Box>
                <Box
                    sx={{
                        margin: "16px 10px"
                    }}
                >
                    <List>
                        {navData.map((section, index) => (
                            <Box key={index}>
                                <Box
                                    sx={(theme) => ({
                                        display: "block",
                                        padding: "2px 0",
                                        paddingTop: "16px",
                                        [theme.breakpoints.up('xl')]: {
                                            marginLeft: "2px"
                                        }
                                    })}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: "block",
                                            padding: "9px 13px",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            color: "#646477"
                                        }}
                                    >{section.header}</Typography>
                                </Box>
                                {section.items.map((item, idx) => {
                                    const isParentActive =
                                    (item.href && location.pathname === item.href) ||
                                    (item.subMenu?.some(sub => location.pathname.startsWith(`/${sub.href}`)));

                                    return (
                                        <Box key={idx} sx={{ margin: "1.5px 12px" }}>
                                            <ListItemButton
                                                selected={isParentActive || openMenu === item.label}
                                                {...(item.href && {
                                                    component: RouterLink,
                                                    to: item.href,
                                                    onClick: () => {
                                                        if (!isDesktop) onClose(); // close drawer on mobile
                                                    }
                                                })}
                                                onClick={() => {
                                                    if (item.subMenu) handleToggle(item.label);
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <Icon icon={item.icon} />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <Typography variant="body1">{item.label}</Typography>
                                                </ListItemText>
                                                {item.subMenu && (
                                                    <Icon
                                                        icon={
                                                        openMenu === item.label
                                                            ? "solar:alt-arrow-up-line-duotone"
                                                            : "solar:alt-arrow-down-line-duotone"
                                                        }
                                                    />
                                                )}
                                            </ListItemButton>

                                            {item.subMenu && (
                                                <Collapse in={openMenu === item.label} timeout="auto" unmountOnExit>
                                                    <List>
                                                        {item.subMenu.map((sub, subIdx) => {
                                                            return (
                                                                <ListItemButton
                                                                    key={subIdx}
                                                                    component={RouterLink}
                                                                    to={sub.href}
                                                                    sx={{ margin: "3px 0 1.4px", paddingLeft: "30px" }}
                                                                    selected={location.pathname.startsWith(`/${sub.href}`)}
                                                                    onClick={() => sub.href && handleNavigate(sub.href)}
                                                                >
                                                                <ListItemText>
                                                                    <Typography variant="body1">{sub.label}</Typography>
                                                                </ListItemText>
                                                                </ListItemButton>
                                                            );
                                                        })}
                                                    </List>
                                                </Collapse>
                                            )}
                                        </Box>
                                    );
                                })}
                            </Box>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Sidebar