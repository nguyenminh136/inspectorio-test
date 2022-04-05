import { useContext, useEffect, useState } from "react"
import axios, { AxiosRequestConfig } from 'axios';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar