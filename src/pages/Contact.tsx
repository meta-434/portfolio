import { Mail, LinkedIn, GitHub, LocalPhone } from '@mui/icons-material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Contact () {
    return (
        <Container maxWidth='xl'>
            <Typography
            variant="h6"
            gutterBottom
            align='center'
            sx={{mt: 5}}
            >
                I&apos;d love to hear from you!
                Contact me using any of the methods below!
            <br />
                <Link target="_blank" href='mailto:alex@hapgood.me'><Mail /></Link>
                <Link target="_blank" href='https://www.linkedin.com/alex-hapgood'><LinkedIn /></Link>
                <Link target="_blank" href='https://github.com/meta-434'><GitHub /></Link>
                <Link target="_blank" href='tel:4342497488'><LocalPhone /></Link>
            </Typography>
        </Container>
    )
}