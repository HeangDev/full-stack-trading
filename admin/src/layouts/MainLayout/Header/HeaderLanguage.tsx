import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import UnitedStates from "../../../assets/flags/united-states.svg"

const HeaderLanguage = () => {
    return (
        <>
            <Box
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.down('md')]: {
                        marginLeft: "3px",
                    },
                    [theme.breakpoints.up('md')]: {
                        marginLeft: "9px"
                    }
                })}
            >
                <IconButton><Avatar alt="" src={UnitedStates} sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px"
                }}/></IconButton>
            </Box>
        </>
    )
}

export default HeaderLanguage