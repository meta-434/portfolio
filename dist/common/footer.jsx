import { Typography, Link } from '@mui/material';
export default function PortfilioFooter() {
    return (<Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.hapgood.me/">
        Alex Hapgood
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>);
}
//# sourceMappingURL=footer.jsx.map