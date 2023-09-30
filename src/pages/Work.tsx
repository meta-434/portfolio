import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image'
import synergy from '../public/synergy/synergy-main.png'
import acidrt from '../public/acidrt/acidrt-main.png'
import pomodoro2 from '../public/pomodoro2/pomodoro2-main.png'
import noteful from '../public/noteful/noteful-main.png'
import unixshellquiz from '../public/unixshellquiz/unixshellquiz-main.png'

const cards = [
  { id: 0,
    name: 'BrewJournal - WORK IN PROGRESS',
    shortDesc: 'A web application for the ultimate coffee nerd. Intended to encourage sharing and discovering of coffees, roasters, and brewing methods. Built using TypeScript with Next.js, React, and Material-UI.',
    link: 'synergy',
    techStack: '',
    img: ''
  },
  { id: 1,
    name: 'Synergy by Sigora Solar',
    shortDesc: 'Synergy - A web application built to enable solar sales. Includes user management, CAD drawing overlays, Google Maps, NearMap, and Google Geocoding APIs, Financing API integrations with multiple lenders, and DocuSign integrated flow. ',
    link: 'synergy',
    techStack: '',
    img: synergy
  },
  {
    id: 2,
    name: 'ACIDRT (Albemarle County Illicit Discharge Reporting Tool',
    shortDesc: 'A web application for reporting illicit discharges to the Albemarle County Service Authority.',
    techStack: 'Google Maps API, Recharts, React, React-Router, PostgresQL',
    link: 'acidrt',
    img: acidrt
  },
  { id: 2, name: 'Pomodoro V2', shortDesc: 'C', link: 'pomodoro2', img: pomodoro2},
  { id: 3, name: 'Noteful', shortDesc: 'D', link: 'noteful', img: noteful },
  { id: 4, name: 'Unix Shell Quiz', shortDesc: 'E', link: 'unixshellquiz', img:  unixshellquiz},
];

export default function Work() {
  return (
    <Container maxWidth="xl" id="Work">
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.id} xs={12}>
            <Card sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
              <CardMedia title="Your title">
                <div style={{ position: 'relative', width: '100%', height: '100%', textAlign: 'start' }}>
                  <Image alt={card.name} src={card.img} width={700} height={350} />
                </div>
              </CardMedia>
              <div style={{ flexDirection: 'column' }} >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.shortDesc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{width: '100%'}}>
                  <Link href={`/portfolio/${card.link}`}>Read More</Link>
                </Button>
              </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
