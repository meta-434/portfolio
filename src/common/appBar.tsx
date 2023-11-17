import React, { ReactElement } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';

const pages = ['About', 'Experience', 'Work', 'Contact'];

const PortfolioAppBar: React.FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("event open registered", event)
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log('handle close called');
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href="/"  style={{ textDecoration: 'none', color: '#FFF' }}>
              ACH
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="mobile-menu-appbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/#${page}`} style={{textAlign: "center"}}>{page}</Link>
                </MenuItem>
              ))}
              <MenuItem key={'resume'} onClick={handleCloseNavMenu}>
                <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQe5IN-HkoK0H6po4S1jczD-jKHcZXBe7BZQLClCLgXwWqBgMdLaVzqvfY7HRYG4sqaqFwKkcfx2grf/pub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Resume </a>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: '#FFF' }}>
              ACH
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} flexGrow={1} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button sx={{ ml: 1, mr: 1, mt: 0, mb: 0, display: {xs: 'none', md: 'flex'} }}>
                <Link href={`/#${page}`} style={{ textDecoration: 'none', color: '#FFF' }}>
                  {page}
                </Link>
              </Button>
            ))}
            <Button sx={{ ml: 1, mr: 1, mt: 0, mb: 0, display: {xs: 'none', md: 'flex'} }}>
                <Link
                    href="https://drive.google.com/uc?export=download&id=1-jWShx_LPgsRet2Y2sebVYRUgxMRpofW"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none', color: '#FFF'}}
                >
                  RESUME </Link>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PortfolioAppBar;
