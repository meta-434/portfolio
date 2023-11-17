import { Paper, Container, Card } from '@mui/material';
import Link from 'next/link';
var ProjectCard = function (props) {
    var title = props.title, description = props.description;
    return (<Container maxWidth="xl">
      <Paper elevation={0} sx={{
            mt: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Card elevation={1} sx={{ m: 2, p: 1, minHeight: 'auto' }}>
          <h1>{title}</h1>
          <p>{description}</p>
          {props.links
            .concat([
            {
                url: '/',
                linkText: 'Back to home',
                type: 'internal',
            },
        ])
            .map(function (link, index) {
            return link.type === 'internal' ? (<button key={index}>
                  <Link href={link.url}>{link.linkText}</Link>
                </button>) : (<button key={index}>
                  <a target="_blank" href={link.url} rel="noopener noreferrer">
                    {link.linkText}
                  </a>
                </button>);
        })}
        </Card>
      </Paper>
    </Container>);
};
export default ProjectCard;
//# sourceMappingURL=projectCard.jsx.map