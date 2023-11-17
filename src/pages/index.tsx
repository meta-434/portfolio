import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PortfolioAppBar from '../common/appBar'
import PortfolioFooter from '../common/footer'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Experience from './Experience'

export default function Portfolio() {
  return (
    <>
      <PortfolioAppBar />
      <main>
        {/* Hero unit */}
        <Experience />
        <About />
        <Work />
        <Contact />
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          icons by <a target="_blank" href="https://icons8.com">Icons8</a> and <a target="_blank" href="https://www.svgrepo.com/">SVGRepo</a>
        </Typography>
        <PortfolioFooter />
      </Box>
      {/* End footer */}
    </>
  )
}
