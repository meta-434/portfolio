import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';

export default function PortfolioAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl || undefined);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="primary" component="div">
            ACH
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            id="menu-button"
            onClick={handleClick}
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <Link href={'/'}>About Me</Link>
            </MenuItem>
            <MenuItem>
              <Link href={'/portfolio/acidrt'}>ACIDRT</Link>
            </MenuItem>
            <MenuItem>
              <Link href={'/test'}>TEST</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
