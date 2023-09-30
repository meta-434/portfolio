import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PortfolioAppBar from '../common/appBar';
import PortfolioFooter from '../common/footer';
import About from './About';
import Work from './Work';
export default function Portfolio() {
    return (<>
      <PortfolioAppBar />
      <main>
        {/* Hero unit */}
        <Box sx={{
            pt: '25vh',
            pageBreakAfter: 'always',
            height: '100vh',
        }}>
          <Container maxWidth="sm">
            <Typography component={'h3'} variant={'h4'} align="left" color={'text.tertiary'} gutterBottom>
              Hey, I&apos;m
            </Typography>
            <Typography component="h1" variant="h2" align="left" color="text.primary" gutterBottom>
              Alex Hapgood
            </Typography>
            <Typography align="left" color="text.secondary" paragraph sx={{ marginTop: '20px' }}>
              I&apos;m a software engineer specializing in front-end
              development, but with experience in middleware and back-end
              development. I enjoy bringing designs from concept to
              implementation.
              <br />
              <br />
              Right now I&apos;m interested in new JS technologies, and gaining
              experience wherever I can.
              <br />
              <br />
              <b>
                <em>Open to new positions!</em>
              </b>
            </Typography>
          </Container>
        </Box>
        <About />
        <Work />
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <PortfolioFooter />
      </Box>
      {/* End footer */}
    </>);
}
//# sourceMappingURL=index.jsx.map