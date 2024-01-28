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
import brewjournal from '../public/brewjournal/brewjournal-main.png'
import react48 from '../public/icons/icons8-react-48.svg'
import javascript48 from '../public/icons/icons8-javascript-48.svg'
import typescript48 from '../public/icons/icons8-typescript-48.svg'
import materialUI48 from '../public/icons/icons8-material-ui-48.svg'
import vite48 from '../public/icons/icons8-vite-48.svg'
import docker48 from '../public/icons/icons8-docker-48.svg'
import express48 from '../public/icons/icons8-express-48.svg'
import nodejs48 from '../public/icons/icons8-node-js-48.svg'
import gmaps48 from '../public/icons/icons8-google-maps-48.svg'
import graphql48 from '../public/icons/icons8-graphql-48.svg'


interface nextImage extends Object {
  src: string;
}

const cards = [
  { id: 0,
    name: 'BrewJournal - Under Construction!',
    shortDesc: 'An application for the ultimate coffee nerd. Intended to encourage sharing and discovering of coffees, roasters, and brewing methods. A fully dockerized monorepo with a TypeScript React/Vite/MaterialUI frontend and a TypeScript Node/Express/Knex/PostgresQL backend. Uses Auth0 for identity and access management. Under live development! Check out my progress on GitHub!',
    img: brewjournal,
    techStack: [typescript48, react48, vite48, materialUI48, nodejs48, express48, docker48],
    monorepo: 'https://github.com/meta-434/brewjournal'
  },
  { id: 1,
    name: 'Synergy by Sigora Solar',
    shortDesc: 'Built to enable solar sales. Includes user management, CAD drawing overlays, Google Maps, NearMap, and Google Geocoding APIs, Financing API integrations with multiple lenders, and DocuSign integrated flow. Contact me if you\'re interested in seeing the site in action!',
    techStack: [materialUI48, javascript48, react48, nodejs48, gmaps48, graphql48],
    img: synergy,
  },
  {
    id: 2,
    name: 'ACIDRT (Albemarle County Illicit Discharge Reporting Tool',
    shortDesc: 'A tool for reporting illicit discharges to the Albemarle County Service Authority.',
    techStack: [javascript48, react48, materialUI48,nodejs48, gmaps48],
    img: acidrt,
    client: 'https://github.com/meta-434/acidrt',
    server: 'https://github.com/meta-434/acidrt-api',
    liveSite: 'https://acidrt.vercel.app/'
  },
  { id: 2,
    name: 'Pomodoro V2',
    shortDesc: 'A simple Pomodoro timer built with React and Material-UI. Use it to stay focused and productive! ',
    techStack: [javascript48, react48, materialUI48],
    img: pomodoro2,
    client: 'https://github.com/meta-434/capstone-one-client/',
    server: 'https://github.com/meta-434/capstone-one-server',
    liveSite: 'https://pomodoro-app-nine.vercel.app/timer',
  },
  { id: 3,
    name: 'Noteful',
    shortDesc: 'A persistent note-taking app with folders for note organization.',
    techStack: [javascript48, react48, nodejs48],
    img: noteful,
    client: 'https://github.com/meta-434/Noteful',
    server: 'https://github.com/meta-434/noteful-server',
    liveSite: 'https://noteful-lake.vercel.app/',
  },
  { id: 4,
    name: 'Unix Shell Quiz',
    shortDesc: 'A simple jQuery + CSS quiz site to help you learn the Unix shell.',
    techStack: [javascript48],
    img:  unixshellquiz,
    client: 'https://github.com/meta-434/quizApp',
    liveSite: 'https://meta-434.github.io/quizApp/',
  },
];

export default function Work() {
  return (
    <Container maxWidth="xl" id="Work">
      <Grid container spacing={3}>
        {cards.map((card, idx: number) => (
          <Grid key={card.id} xs={12}>
            <Card sx={{ display: 'flex', flexDirection: 'row', p: 2, maxHeight: 380 }}>
              <CardMedia title='project name'>
                <div style={{ position: 'relative', width: '100%', height: '100%', textAlign: 'start' }}>
                  <Image alt={card.name} src={card.img} key={'card_'+idx} width={700} height={350} />
                </div>
              </CardMedia>
              <div style={{flexDirection: 'column'}} >
              <CardContent sx={{  mb: 'auto' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.shortDesc}</Typography>
                <br />
                <hr/>
                <Typography sx={{ display: 'flex', textAlign:"center", justifyContent: 'space-around' }}>
                    {
                      card.techStack && card.techStack.map((tech: nextImage, idx: number) =>  (<Image src={tech?.src} alt={`${tech} icon`} key={'icon_' + idx} height={32} width={32}/>))
                    }
                </Typography>
              </CardContent>
              <CardActions>
                { card.monorepo ? <Button size="small" sx={{width: '100%'}}><Link target="_blank" href={`${card.monorepo}`}>Monorepo</Link></Button> : ''}
                { card.client ? <Button size="small" sx={{width: '100%'}}><Link target="_blank" href={`${card.client}`}>Client GitHub</Link></Button> : ''}
                { card.server ? <Button size="small" sx={{width: '100%'}}><Link target="_blank" href={`${card.server}`}>Server GitHub</Link></Button>  : ''}
                { card.liveSite ? <Button size="small" sx={{width: '100%'}}><Link target="_blank" href={`${card.liveSite}`}>Live Site</Link></Button> : ''}
              </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
