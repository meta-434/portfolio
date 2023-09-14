import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import PortfolioAppBar from '@/common/appBar';
import PortfolioFooter from '@/common/footer';

// const addInts = (a: number, b: number): number => a + b;
// const testAddInts = expect(addInts(1, 2)).toBe(3);

const cards = [
  { id: 0, name: 'Synergy by Sigora Solar', shortDesc: 'A', link: 'synergy' },
  {
    id: 1,
    name: 'ACIDRT (Albemarle County Illicit Discharge Reporting Tool',
    shortDesc: 'B',
    link: 'acidrt',
  },
  { id: 2, name: 'Pomodoro V2', shortDesc: 'C', link: 'pomodoro2' },
  { id: 3, name: 'Noteful', shortDesc: 'D', link: 'noteful' },
  { id: 4, name: 'Unix Shell Quiz', shortDesc: 'E', link: 'unixshellquiz' },
  { id: 5, name: 'Movie Lookup App', shortDesc: 'F', link: 'movielookup' },
  { id: 6, name: 'Pomodoro V1', shortDesc: 'G', link: 'pomodoro1' },
];

const a = { allo: 'b' };
console.log('a', a);

export default function Album() {
  return (
    <>
      <PortfolioAppBar />
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
            <Avatar
              alt="Alex Hapgood"
              src="/headshot.jpeg"
              sx={{ margin: 'auto', width: 128, height: 128 }}
            />
            <Typography
              align="center"
              color="text.secondary"
              paragraph
              sx={{ marginTop: '20px' }}
            >
              JavaScript Developer | Full-Stack Engineer <br />
              Developer for Sigora Solar <br />
              <b>
                <em>Open to new positions!</em>
              </b>
              <br />
              Interested in new JS technologies, from front-end to server-side
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map(card => (
              <Grid key={card.id} xs={12}>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={`/${card.link}/${card.link}-main.png`}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.shortDesc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Link href={`/portfolio/${card.link}`}>Read More</Link>
                    </Button>
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
        <PortfolioFooter />
      </Box>
      {/* End footer */}
    </>
  );
}
