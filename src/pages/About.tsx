import Avatar from '@mui/material/Avatar';
import headshot from '../public/headshot.png';
import Image from 'next/image';
import { Container } from '@mui/material';

export default function About() {
  return (
    <Container
      sx={{ textAlign: 'center', paddingTop: 20 }}
      maxWidth="xl"
      id="About"
    >
      <Avatar
        alt="Alex Hapgood"
        sx={{
          margin: 'auto',
          width: 128,
          height: 128,
        }}
      >
        <Image src={headshot} alt="Alex Hapgood" width={128} height={128} />
      </Avatar>
      <br />
    </Container>
  );
}
