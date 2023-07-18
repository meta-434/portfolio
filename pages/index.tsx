import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Avatar, IconButton, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [
    {id: 0, name: "Synergy by Sigora Solar", shortDesc: "A", link: "synergy"},
    {id: 1, name: "ACIDRT (Albemarle County Illicit Discharge Reporting Tool", shortDesc: "B",  link: "acidrt"},
    {id: 2, name: "Pomodoro V2", shortDesc: "C",  link: "pomodoro-v2"},
    {id: 3, name: "Noteful", shortDesc: "D",  link: "noteful"},
    {id: 4, name: "Unix Shell Quiz", shortDesc: "E",  link: "unixshellquiz"},
    {id: 5, name: "Movie Lookup App", shortDesc: "F",  link: "movielookup"},
    {id: 6, name: "Pomodoro V1", shortDesc: "G",  link: "pomodoro-v1"}
];

const theme = createTheme();

export default function Album() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl || undefined);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="primary" component="div">
                        ACH
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        id="menu-button"
                        onClick={handleClick}
                        sx={{ marginLeft: "auto" }}
                    >
                        <MenuIcon />
                    </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem><Link href={"/"}>About Me</Link></MenuItem>
                    <MenuItem><Link href={"/portfolio/acidrt"}>ACIDRT</Link></MenuItem>
                    <MenuItem><Link href={"/test"}>TEST</Link></MenuItem>
                </Menu>


                </Toolbar>
            </AppBar>
            </Box>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hey, I'm Alex
                        </Typography>
                        <Avatar alt="Alex Hapgood" src="/headshot.jpeg" sx={{ margin: 'auto', width: 128, height: 128 }}/>
                        <Typography align="center" color="text.secondary" paragraph sx={{marginTop: '20px'}}>
                            JavaScript Developer | Full-Stack Engineer <br/>
                            Developer for Sigora Solar <br/>
                            <b><em>Open to new positions!</em></b><br/>
                            Interested in new JS technologies, from front-end to server-side
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12}>
                                <Card
                                    sx={{ display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={`/portfolioAssets/${card.link}.png`}
                                        alt={card.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.shortDesc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"><Link href={`/portfolio/${card.link}`}>Read More</Link></Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </>
    );
}
