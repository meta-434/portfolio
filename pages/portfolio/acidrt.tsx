import PortfolioAppBar from '@/common/appBar';
import PortfolioFooter from '@/common/footer';
import ProjectCard from '@/common/projectCard';
import acidrtImg from 'public/acidrt/acidrt-main.png';

const images = [
  {
    label: 'ACIDRT Main Dashboard',
    imgPath: acidrtImg,
    width: 1183,
  },
];

const links = [
  {
    url: 'https://github.com/meta-434/Albemarle-County',
    linkText: 'Repo for Prompt',
    type: 'external',
  },
  {
    url: 'https://github.com/meta-434/acidrt-api',
    linkText: 'Repo of API/Server',
    type: 'external',
  },
];

export default function ACIDRT() {
  return (
    <>
      <PortfolioAppBar />
      <ProjectCard
        title="ACIDRT"
        description={`ACIDRT ( Albemarle Country Illicit Discharge Reporting Tool ) is a
              reporting tool that is my answer to the prompt
              given to me by my local municipality a few years ago at a civic
              innovation event, where people of all background gathered to
              attempt to solve problems facing the community at large. The web
              app provides a form for illicit discharge reporting, including the
              ability to precisely place a map pin at the location of the
              incident. The app also provides a fully-featured interface and
              dashboard for employees of the municipality in order to see data
              at a glance, or edit and delete reports. The app uses a node and
              express backend server built alongside it, linked below`}
        images={images}
        links={links}
      />
      <PortfolioFooter />
    </>
  );
}
