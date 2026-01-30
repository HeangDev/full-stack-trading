import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

import UnitedStates from "../../../assets/flags/united-states.svg"

const HeaderLanguage = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const languages = [
        { code: 'en', label: 'english', flag: 'flag:us-1x1' },
        { code: 'km', label: 'khmer', flag: 'flag:kh-1x1' },
        { code: 'zh', label: 'chinese', flag: 'flag:cn-1x1' },
        { code: 'th', label: 'thai', flag: 'flag:th-1x1' }
    ];
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        const savedLang = localStorage.getItem("lang") || i18n.language || "en";
        i18n.changeLanguage(savedLang);
        document.documentElement.lang = savedLang;
    }, [i18n])

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        localStorage.setItem("lang", code);
        document.documentElement.lang = code;
        handleClose();
    }

    return (
        <>
            <Box
                sx={(theme) => ({
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.down('xl')]: {
                        marginLeft: "3px",
                    },
                    [theme.breakpoints.up('xl')]: {
                        marginLeft: "9px"
                    }
                })}
            >
                <IconButton onClick={handleClick}>
                    <Avatar alt="" src={UnitedStates}
                        sx={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "6px"
                        }}
                    />
                </IconButton>
                <Popper
                    placement="bottom-end"
                    open={open}
                    anchorEl={anchorEl}
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <Paper
                            sx={{
                                width: 175,
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
                                <List>
                                    {languages.map((lang) => {
                                        const isSelected = i18n.language === lang.code;
                                        return (
                                            <ListItem
                                                key={lang.code}
                                            >
                                                <ListItemButton selected={isSelected} onClick={() => handleLanguageChange(lang.code)}>
                                                    <ListItemAvatar>
                                                        <Icon icon={lang.flag} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary={<Typography variant="body2">{t(`language.${lang.label}`)}</Typography>} />
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Box> 
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            </Box>
        </>
    )
}

export default HeaderLanguage