import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useTranslation } from 'react-i18next';

const HeaderAvatar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { t } = useTranslation();
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        
    }

    return (
        <>
            <Box
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.down('xl')]: {
                        marginLeft: "6px",
                    },
                    [theme.breakpoints.up('xl')]: {
                        marginLeft: "9px"
                    }
                })}
            >
                <IconButton
                    sx={{ "&:hover": {backgroundColor: "transparent"}}}
                    onClick={handleClick}
                >
                    <Avatar alt="Sim Kimheang" src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg"
                        sx={(theme) => ({
                            [theme.breakpoints.down('xl')]: {
                                width: "35px",
                                height: "35px",
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: "40px",
                                height: "40px",
                            },
                        })}
                    />
                </IconButton>
                <Popper
                    placement="bottom-end"
                    open={open}
                    anchorEl={anchorEl}
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <Box>
                            <Paper
                                sx={{
                                    width: 275,
                                    borderRadius: "6px",
                                    boxShadow: "0px 0px 50px 0px rgba(82, 63, 105, 0.15)"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingY: "12px"
                                    }}
                                >
                                    <Box sx={{ display: "block", padding: "2px 9px" }}>
                                        <Stack direction="row" sx={{ alignItems: "center", padding: "8px 12px" }}>
                                            <Avatar
                                                alt="Sim Kimheang"
                                                src="https://keenthemes.com/keen/demo1/assets/media/avatars/300-3.jpg"
                                                sx={{
                                                    width: "50px",
                                                    height: "50px",
                                                    marginRight: "12px",
                                                }}
                                            />
                                            <Stack>
                                                <Typography variant="h6">Sim Kimheang</Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={(theme) => ({
                                                        fontSize: 12,
                                                        color: (theme.vars || theme).palette.text.secondary,
                                                    })}
                                                >simkimheang4@gmail.com</Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Divider/>
                                    <List>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.my_profile")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.my_subscription")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.my_statements")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <Divider/>
                                    <List>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.billing_plans")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.account_settings")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={handleLogout}>
                                                <ListItemText primary={<Typography variant="body2">{t("headerProfile.sign_out")}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Paper>
                        </Box>
                    </ClickAwayListener>
                </Popper>
            </Box>
        </>
    )
}

export default HeaderAvatar