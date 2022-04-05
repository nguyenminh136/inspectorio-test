import { useEffect, useState } from "react"
import axios, { AxiosRequestConfig } from 'axios';
import { AppBar, Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
const Person = () => {
    const { name } = useParams();
    const [user, setUsers] = useState<any>({})
    useEffect(() => {
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            url: `users/${name}`,
            timeout: 30000,
            baseURL: 'https://api.github.com/',
            headers: {
                'Content-Type': 'application/vnd.github.v3+json',
                'Authorization': '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',

            }
        }
        axios.request(requestConfig).then(res => {
            const user = res.data
            setUsers(user)
        })
    }, [name])
    let navigate = useNavigate()
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });
    return (
        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar sx={{ display: "flex", justifyContent: "center" }} variant="dense">
                        <Button sx={{ position: "absolute", left: 0 }} onClick={() => navigate('/')} variant="text" color="inherit" startIcon={<ArrowBackIosIcon />}>
                            Back
                        </Button>
                        <Typography variant="h6" color="inherit" component="div">
                            Person
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={user?.avatar_url} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={user?.login}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {user?.location}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </React.Fragment>
    )
}

export default Person