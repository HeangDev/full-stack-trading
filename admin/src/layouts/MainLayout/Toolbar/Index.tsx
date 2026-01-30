import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Index = () => {
    return (
        <>
            <Box
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "stretch",
                    [theme.breakpoints.down('xl')]: {
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    },
                    [theme.breakpoints.up('xl')]: {
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    },
                })}
            >
                <Stack
                    sx={(theme) => ({
                        flexGrow: 1,
                        [theme.breakpoints.down('xl')]: {
                            paddingLeft: "20px",
                            paddingRight: "20px",
                        },
                        [theme.breakpoints.up('xl')]: {
                            paddingLeft: "30px",
                            paddingRight: "30px",
                        },
                    })}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            flexWrap: "wrap"
                        }}
                    >
                        <Typography variant="h1"
                            sx={(theme) => ({
                                fontWeight: 500,
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: theme.typography.pxToRem(16),
                                },
                                [theme.breakpoints.up('xl')]: {
                                    fontSize: theme.typography.pxToRem(17),
                                },
                            })}
                        >Default</Typography>
                        <Breadcrumbs
                            sx={(theme) => ({
                                paddingTop: "3px",
                                [theme.breakpoints.down('xl')]: {
                                    fontSize: theme.typography.pxToRem(11),
                                },
                                [theme.breakpoints.up('xl')]: {
                                    fontSize: theme.typography.pxToRem(13),
                                },
                            })}
                        >
                            <Link underline="hover" color="inherit" href="/">Home</Link>
                            <Typography
                                sx={(theme) => ({
                                    paddingTop: "3px",
                                    [theme.breakpoints.down('xl')]: {
                                        fontSize: theme.typography.pxToRem(11),
                                    },
                                    [theme.breakpoints.up('xl')]: {
                                        fontSize: theme.typography.pxToRem(13),
                                    },
                                })}
                            >Dashboards</Typography>
                        </Breadcrumbs>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Index