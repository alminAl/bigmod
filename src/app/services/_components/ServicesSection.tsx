interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  number: string;
  description: string;
}

function ServiceCard({ icon, title, number, description }: ServiceCardProps) {
  return (
    <div className="relative p-6 bg-[#111]/20 backdrop-blur-xl rounded-lg">
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-secondary_two rounded-full">{icon}</div>
        <span className="text-5xl font-bold text-[#222]">{number}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <a
        href="#"
        className="text-secondary_two text-sm hover:text-secondary_one transition-colors inline-flex items-center"
      >
        Read More
        <span className="ml-1">›</span>
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Web Design",
      number: "01",
      description:
        "Creating visually appealing and user-friendly websites tailored to your brand and audience.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      ),
      title: "App Design",
      number: "02",
      description:
        "Designing intuitive and engaging mobile app interfaces for seamless user experiences.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Developing",
      number: "03",
      description:
        "Building robust and scalable solutions to bring your ideas to life using modern technologies.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      title: "Graphic Design",
      number: "04",
      description:
        "Crafting unique visual content to enhance your brand identity and communication.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: "3D Design",
      number: "06",
      description:
        "Delivering immersive and innovative 3D designs to elevate your project visuals.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "UI/UX Design",
      number: "07",
      description:
        "Enhancing user satisfaction through seamless and interactive designs.",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="mb-12">
          <p className="text-secondary_two mb-2 uppercase tracking-wider text-sm font-semibold">
            WHAT WE DO
          </p>
          <h2 className="text-5xl font-bold text-white max-w-xl leading-tight">
            We Work Performed For Client Happy.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
