import { Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function Experience() {
  return (
    <Box
      sx={{
        pt: '5vh',
        pb: '10vh',
        height: 'auto',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component={'h3'}
          variant={'h4'}
          align="left"
          color={'text.tertiary'}
          gutterBottom
        >
          Hey, I&apos;m
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="left"
          color="text.primary"
          gutterBottom
        >
          Alex Hapgood
        </Typography>
        <Typography
          align="left"
          color="text.secondary"
          paragraph
          sx={{ marginTop: '20px', fontSize: '14px' }}
        >
          I&apos;m a full-stack software engineer at EncaptureMD, a
          cardiovascular information system that cardiologists, sonographers,
          and cath lab teams use to turn imaging studies into finished clinical
          reports. I work across the whole platform, from the Vue front end to
          the Java and PostgreSQL back end, and I like owning a feature from
          concept to implementation.
          <br />
          <br />I got here the long way. After a year as an analyst at a
          consulting firm in Washington, DC, I quit and went back to school to
          become a developer. Then came most of an Associate of Engineering, a
          competitive internship program with{' '}
          <Link target="_blank" href="https://joinforge.co/">
            Forge
          </Link>
          , and four years at a solar company growing out of its startup phase.
          I joined EncaptureMD as a customer support engineer, which was a
          natural fit: I have a bachelor's in technical communication from
          Virginia Tech, and explaining and teaching complex technical problems
          has always been one of my strengths. Support taught me the product
          from the user's side, and I was promoted from there to the development
          team.
          <br />
          <br />
          Off the clock, I mess around with my homelab - Docker Swarm,
          orchestration, home automation, hosting, among other things. I like
          building things, taking things apart, and seeing how they work. I LOVE
          music, art, and earnest expression.
          <br />
          <br />
          Want to chat? Reach out!
        </Typography>
      </Container>
    </Box>
  );
}
