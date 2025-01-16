import Arrow from "../shared/icons/Arrow";

const services = [
  {
    id: 1,
    title: "Web App Development",
    description:
      "Bigmod Technologies crafts bespoke web apps to propel your business.",
    link: "/services/web-app-development",
  },
  {
    id: 2,
    title: "Mobile Apps Development",
    description:
      "Bigmod Technologies: Tailored mobile apps to boost your business.",
    link: "/services/mobile-app-development",
  },
  {
    id: 3,
    title: "Cloud and DevOps Services",
    description:
      "Bigmod Technologies: Cloud and DevOps solutions for agile business operations.",
    link: "/services/cloud-devops",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Bigmod Technologies: Creative graphic design solutions for impactful brand visuals.",
    link: "/services/graphic-design",
  },
];

const Service: React.FC = () => {
  return (
    <section className="bg-secondary_dark min-h-96">
      <div className="container mx-auto pt-24 pb-32">
        <div className="text-center">
          <h2 className="capitalize text-5xl md:w-6/12 mx-auto font-semibold leading-[3.8rem]">
            Delivering Exceptional Work for Client Satisfaction
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="card p-10 bg-primary_dark rounded-lg relative flex flex-col justify-between"
            >
              <div className="holder one">
                <div className="circle font-semibold">0{service.id}</div>
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-start">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <a
                href={service.link}
                className="text-primary_two hover:underline mt-4  flex items-center gap-4"
              >
                <span>Read more</span> <Arrow width={14} height={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
