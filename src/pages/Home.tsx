import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesPreview } from '../components/ServicesPreview';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { StatsCounter } from '../components/StatsCounter';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <BeforeAfterSlider />
      <StatsCounter />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

