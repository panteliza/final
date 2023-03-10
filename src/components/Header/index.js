import React from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";
import PostJobModal from '../JobMain/NewModal';


export default function Header() {
    return (
        <Box py={10} bgcolor="secondary.main" color="white">
            <Grid container justify="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">Job Lists here</Typography>
                        <PostJobModal />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}