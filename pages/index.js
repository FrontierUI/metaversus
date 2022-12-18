import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="z-0 grayscale-03" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="z-0 grayscale-04" />
      <WhatsNew />
    </div>

    <World />

    <div className="relative">
      <Insights />
      <div className="z-0 grayscale-04x" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
