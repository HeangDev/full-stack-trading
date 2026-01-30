import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { Icon } from "@iconify/react";

const HeaderNotification = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <IconButton><Icon icon="solar:bell-bing-bold-duotone" /></IconButton>
            </Box>
        </>
    )
}

export default HeaderNotification