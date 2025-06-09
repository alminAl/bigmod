import logoPart01 from '@/assets/logo/logoPart01.svg';
import logoPart02 from '@/assets/logo/logoPart02.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const AboutUs = () => {
  const faqData = [
    {
      question: 'What types of businesses do you work with?',
      answer:
        'At BigMod Technologies, we work with businesses of all sizes—from startups to large enterprises—across a variety of industries. Our services are adaptable to meet the unique challenges and goals of each client, ensuring that our solutions fit their specific needs.',
    },
    {
      question: 'How does your process work for new projects?',
      answer:
        'Our process begins with a discovery phase, where we get to know your business goals, target audience, and project requirements. We then move through strategy development, design, development, and testing. We collaborate closely with you throughout, ensuring the project aligns with your vision every step of the way.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We specialize in a wide range of technologies, including JavaScript frameworks (React, Angular, Vue), mobile development platforms (iOS, Android, Flutter), cloud solutions (AWS, Google Cloud, Azure), and DevOps tools (Docker, Kubernetes, Jenkins). Our team stays updated with the latest tools and trends to offer innovative solutions.',
    },
    {
      question: 'Can you help us with branding and digital marketing?',
      answer:
        'Absolutely! Beyond software and app development, we provide digital branding services that include logo design, brand identity creation, graphic design, and strategic digital marketing. Our goal is to create a cohesive brand experience that resonates with your target audience.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on the complexity and scope of the work. For example, a web or mobile app might take anywhere from a few weeks to several months. After an initial consultation, we’ll provide a tailored timeline to meet your project’s specific needs.',
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer:
        'Yes, we offer post-launch support and maintenance packages to ensure your digital products continue to perform optimally. We can help with updates, troubleshooting, and adding new features as your business grows.',
    },
    // {
    //   question:
    //     "What sets BigMod Technologies apart from other digital agencies?",
    //   answer:
    //     "BigMod Technologies is driven by innovation, client satisfaction, and measurable results. We don’t just deliver a service; we build long-term partnerships, investing in your success. Our holistic approach—covering development, design, and digital branding—ensures that you get a cohesive strategy that supports your goals.",
    // },
    // {
    //   question: "How can we get started with BigMod Technologies?",
    //   answer:
    //     "Getting started is easy! Just reach out to us via our contact form or email. We’ll schedule an initial consultation to discuss your needs, answer any questions, and outline how we can help bring your vision to life.",
    // },
  ];
  const services = [
    {
      title: 'Web App Development',
      description:
        'BigMod Technologies creates custom web applications tailored to each client’s unique needs. Our web apps are designed to enhance productivity, engagement, and functionality—positioning your business to succeed in the digital marketplace.',
    },
    {
      title: 'Mobile App Development',
      description:
        'From concept to launch, our mobile app development services are crafted to connect your brand with users on the go. Whether iOS or Android, we build applications that are as engaging as they are functional, driving your business’s digital reach.',
    },
    {
      title: 'Cloud and DevOps Services',
      description:
        'Streamline your operations with our Cloud and DevOps solutions. BigMod Technologies helps clients optimize their infrastructure, embrace scalability, and maintain agile workflows to support continuous growth and innovation.',
    },
    {
      title: 'Graphic Design',
      description:
        'Our creative graphic design team transforms ideas into impactful visual experiences. From brand identity to marketing materials, we deliver designs that capture attention and resonate with your audience.',
    },
  ];

  return (
    <section className="">
      <div className="text-center pt-32 pb-20">
        <h4 className="mb-6 uppercase text-sm tracking-[0.3rem] font-medium text-secondary_two">
          About Us
        </h4>
        <div className="md:w-5/12 mx-auto relative">
          <h2 className="text-5xl  font-semibold ">
            Meet the Team Dedicated to Bringing Your Vision to Life
          </h2>
          <Image
            src={logoPart01}
            alt="logo"
            className="absolute top-16 -left-8 w-20 rotate-90"
          />
          <Image
            src={logoPart02}
            alt="logo"
            className="absolute bottom-16 -right-10 w-20 rotate-90 transform -scale-y-100 -scale-x-100 "
          />
        </div>
      </div>
      <div className="py-6 container mx-auto text-center">
        <h3 className="font-semibold text-xl pb-4 tracking-wide">
          Empowering Digital Success with Innovation and Excellence
        </h3>
        <p className="w-8/12 mx-auto text-sm">
          At BigMod Technologies, we specialize in delivering cutting-edge
          software and intelligent digital branding solutions designed to help
          businesses thrive in the digital era. With a commitment to creativity,
          technology, and client satisfaction, we empower companies of all sizes
          to transform their visions into impactful realities.
        </p>
        <div className="w-6/12 text-start mx-auto px-10 pt-10 pb-16">
          <ol className="list-decimal pl-5 space-y-4 ">
            {services.map((service, index) => (
              <li key={index}>
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-white/60 text-sm">{service.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-6/12 mx-auto px-10 pb-6 pt-10 text-start ">
          <div className="border border-white/15 rounded-lg">
            <Accordion
              type="single"
              collapsible
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`${
                    faqData.length !== index + 1 && 'border-b border-white/15'
                  }`}
                >
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <span className="text-xs">0{index + 1}.</span>
                      <p className="">{faq.question}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{` ${faq.answer}`}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="">
          <div className="mt-12 mx-auto px-8 text-neutral-100 !max-w-[520px] text-start pb-16">
            <p className="opacity-60">
              Work at a fast-growing startup in a team of super-talented
              colleagues (Y Combinator alumni, ex-Google &amp; ex-Shopify
              engineers, and… you?).
            </p>

            <p className="text-secondary_two font-semibold pt-6">
              Work hard, treat people well, and have fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
