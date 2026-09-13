import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image';
import brewjournal from '../public/brewjournal/brewjournal-main.png';
import react48 from '../public/icons/icons8-react-48.svg';
import godot from '../public/icons/icon_godot-color.svg';
import typescript48 from '../public/icons/icons8-typescript-48.svg';
import materialUI48 from '../public/icons/icons8-material-ui-48.svg';
import vite48 from '../public/icons/icons8-vite-48.svg';
import docker48 from '../public/icons/icons8-docker-48.svg';
import express48 from '../public/icons/icons8-express-48.svg';
import nodejs48 from '../public/icons/icons8-node-js-48.svg';
import mage from '../public/mage/mage.png';

interface nextImage extends Object {
  src: string;
}

export interface ProjectCard {
  id: number;
  name: string;
  shortDesc: string;
  img: any;
  techStack?: any[];
  monorepo?: string;
  server?: string;
  client?: string;
  liveSite?: string;
}

const cards: ProjectCard[] = [
  {
    id: 0,
    name: 'BrewJournal - Under Construction!',
    shortDesc:
      'An application for the ultimate coffee nerd. Intended to encourage sharing and discovering of coffees, roasters, and brewing methods. A fully dockerized monorepo with a TypeScript React/Vite/MaterialUI frontend and a TypeScript Node/Express/Knex/PostgresQL backend. Uses Auth0 for identity and access management. Under live development! Check out my progress on GitHub!',
    img: brewjournal,
    techStack: [
      typescript48,
      react48,
      vite48,
      materialUI48,
      nodejs48,
      express48,
      docker48,
    ],
    monorepo: 'https://github.com/meta-434/brewjournal',
  },
  {
    id: 1,
    name: 'Voxel-based world state magic game',
    img: mage,
    shortDesc:
      'An exploration into Godot - trying to implement an idea about how a mage casting spells should draw on the state of the voxels they intend to manipulate - to interested and varied effects. Using Godot and the help of Claude to learn the new tooling.',
    techStack: [godot],
    monorepo: 'https://github.com/meta-434/brewjournal',
  },
];

export default function Work() {
  return (
    <>
      <div>
        <Typography
          component={'h3'}
          variant={'h4'}
          align="center"
          color={'text.tertiary'}
          gutterBottom
        >
          Side Projects
        </Typography>
        <br />
        <Divider variant="middle" component="div" />
        <br />
      </div>
      <Container maxWidth="xl" id="Work">
        <Grid container spacing={3}>
          {cards.map((card, idx: number) => (
            <Grid key={card.id} xs={12}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  p: 2,
                  maxHeight: 380,
                }}
              >
                <CardMedia title="project name">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      textAlign: 'start',
                    }}
                  >
                    <Image
                      alt={card.name}
                      src={card.img}
                      key={'card_' + idx}
                      width={700}
                      height={350}
                    />
                  </div>
                </CardMedia>
                <div style={{ flexDirection: 'column' }}>
                  <CardContent sx={{ mb: 'auto' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.shortDesc}</Typography>
                    <br />
                    <hr />
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      {card.techStack &&
                        card.techStack.map((tech: nextImage, idx: number) => (
                          <Image
                            src={tech?.src}
                            alt={`${tech} icon`}
                            key={'icon_' + idx}
                            height={32}
                            width={32}
                          />
                        ))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {card.monorepo ? (
                      <Button size="small" sx={{ width: '100%' }}>
                        <Link target="_blank" href={`${card.monorepo}`}>
                          Monorepo
                        </Link>
                      </Button>
                    ) : (
                      ''
                    )}
                    {card.client ? (
                      <Button size="small" sx={{ width: '100%' }}>
                        <Link target="_blank" href={`${card.client}`}>
                          Client GitHub
                        </Link>
                      </Button>
                    ) : (
                      ''
                    )}
                    {card.server ? (
                      <Button size="small" sx={{ width: '100%' }}>
                        <Link target="_blank" href={`${card.server}`}>
                          Server GitHub
                        </Link>
                      </Button>
                    ) : (
                      ''
                    )}
                    {card.liveSite ? (
                      <Button size="small" sx={{ width: '100%' }}>
                        <Link target="_blank" href={`${card.liveSite}`}>
                          Live Site
                        </Link>
                      </Button>
                    ) : (
                      ''
                    )}
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
