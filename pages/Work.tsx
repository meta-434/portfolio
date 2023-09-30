import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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

export default function Work() {
  return (
    <Container maxWidth="xl" id="Work">
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
  );
}
