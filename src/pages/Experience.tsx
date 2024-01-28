import { Typography, Container, Box } from "@mui/material";
import Link from 'next/link';

export default function Experience () {
    return (
        <Box
          sx={{
            pt: '25vh',
            pageBreakAfter: 'always',
            height: '100vh',
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
              sx={{ marginTop: '20px', fontSize: '14px'}}
            >
              I&apos;m a software engineer specializing in front-end
              development, but with experience in middleware and back-end
              development. I enjoy bringing designs from concept to
              implementation.
              <br />
              <br />
              I quit my first job out of college after a year (analyst for a consulting firm in Washington, DC) and 
              did a complete 180° by going back to school to chase my dream of becoming a software developer. After most
              of an Associates of Engineering, a competitive internship program with <> </>
               <Link target='_blank' href='https://joinforge.co/'>Forge</Link>, and 4 years of development at a now-defunct solar company
              transitioning out of the startup phase, I've developed a powerful love for frontend development.
              <br />
              <br />
              Right now I&apos;m interested in practicing TypeScript, remaning fresh with hooks, and learning as much as
               I can about dockerization, and picking up new skills and experience wherever I can.
              <br />
              <br />
              <b>
                <em>Open to new positions!</em>
              </b>
            </Typography>
          </Container>
        </Box>
    );
};