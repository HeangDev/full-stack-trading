import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { Icon } from "@iconify/react";

const HeaderNotification = () => {
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
                <IconButton><Icon icon="solar:bell-bing-bold-duotone" /></IconButton>
            </Box>
        </>
    )
}

export default HeaderNotification