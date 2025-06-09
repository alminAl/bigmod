import Title from '@/components/shared/title/Title';
import ServicesSection from './_components/ServicesSection';
import { WorkProcessSlider } from './_components/WorkProcessSlider';

const page = () => {
  return (
    <div>
      <div>
        <Title
          title="Services"
          url="/services"
        />
      </div>
      <ServicesSection />
      <WorkProcessSlider />
    </div>
  );
};

export default page;
