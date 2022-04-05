import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate()
    const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
    const goToPerson = (name: string) => {
        navigate(`Person/${name}`)
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar sx={{display:"flex", justifyContent:"center"}} variant="dense">
                    <Typography variant="h6"  color="inherit" component="div">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{display:"flex", flexDirection: "column", textAlign: "left", ml: 0}}>
                <h3>Top 5 GitHub Users</h3>
                <h5>Tap the username to see more information</h5>
                <div>
                    {
                        topFive.map((user, id) => 
                        <Button key={id} onClick={() => goToPerson(user)} sx={{ mr: 1 }} variant="contained">
                            {user}
                        </Button>)
                    }

                </div>
            </Container>
        </div>
    )
}

export default Home