import { Mail } from '@mui/icons-material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Contact () {
    return (
        <Container maxWidth='xl'>
            <Typography
            variant="h6"
            noWrap
            gutterBottom
            align='center'
            sx={{mt: 5}}
            >
                I&apos;d love to hear from you!
                Contact me using any of the methods below!
            </Typography>
            <Link href='mailto:alex@hapgood.me'><Mail /></Link>
            
        </Container>
    )
}