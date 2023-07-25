import PortfolioAppBar from '@/common/appBar';
import ImageCarousel from '@/common/carousel';
import PortfolioFooter from '@/common/footer';
import { Container } from '@mui/material';
import Link from 'next/link';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export default function ACIDRT() {
  return (
    <>
      <PortfolioAppBar />
      <Container maxWidth="xl">
        <h1>ACIDRT Portfolio Page</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <p>
          ACIDRT ( Albemarle Country Illicit Discharge Reporting Tool ) is a
          reporting tool that is my answer to the{' '}
          <Link href="https://github.com/meta-434/Albemarle-County">
            prompt
          </Link>{' '}
          given to me by my local municipality a few years ago at a civic
          innovation event, where people of all background gathered to attempt
          to solve problems facing the community at large. The web app provides
          a form for illicit discharge reporting, including the ability to
          precisely place a map pin at the location of the incident. The app
          also provides a fully-featured interface and dashboard for employees
          of the municipality in order to see data at a glance, or edit and
          delete reports. The app uses a node and express backend, found{' '}
          <Link href="https://github.com/meta-434/acidrt-api">here</Link>.
        </p>
        <ImageCarousel data={images} />
      </Container>

      <PortfolioFooter />
    </>
  );
}
