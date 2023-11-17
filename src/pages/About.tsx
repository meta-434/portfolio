import Avatar from '@mui/material/Avatar'
import headshot from '../public/headshot.jpeg';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
     <Container sx={{textAlign:'center'}} maxWidth="xl" id="About">
      <Avatar
        alt="Alex Hapgood"
        sx={{ margin: 'auto', width: 128, height: 128 }}
      >
        <Image src={headshot} alt="Alex Hapgood" width={128} height={128} />
      </Avatar>
      <Typography sx={{mt: 4}} gutterBottom component="p">
        I&apos;m a software engineer specializing in front-end development, but
      </Typography>
    </Container>
  )
}
