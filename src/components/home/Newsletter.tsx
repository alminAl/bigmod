import Image from "next/image";
import newsletterImage from "@/assets/bg/subscribe-bg.jpg";
import partnerCompanyLogo01 from "@/assets/partner/partner-1.png";
import partnerCompanyLogo02 from "@/assets/partner/partner-2.png";
import partnerCompanyLogo03 from "@/assets/partner/partner-3.png";
import partnerCompanyLogo05 from "@/assets/partner/partner-5.png";
import partnerCompanyLogo06 from "@/assets/partner/partner-6.png";
import partnerCompanyLogo07 from "@/assets/partner/partner-7.png";
import partnerCompanyLogo08 from "@/assets/partner/partner-8.png";

// Array of partner logos
const partnerLogos = [
  partnerCompanyLogo01,
  partnerCompanyLogo02,
  partnerCompanyLogo03,
  partnerCompanyLogo05,
  partnerCompanyLogo06,
  partnerCompanyLogo07,
  partnerCompanyLogo08,
];

const Newsletter: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 ">
      {/* Left Section - Newsletter */}
      <div
        className="relative bg-[#1a1a1a] p-6 md:p-8 lg:p-12 lg:py-24 flex items-center justify-center text-center lg:text-left"
        style={{
          background: `url('${newsletterImage.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-md mx-auto lg:mx-0">
          <p className="text-white mb-4 text-sm md:text-base">Get In Touch.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
            SUBSCRIBE OUR
            <span
              className="block"
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}
            >
              NEWSLETTER
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-center justify-center lg:justify-start">
            <input
              className="bg-white w-full md:w-64 lg:w-80 py-3 md:py-4 px-4 rounded-full placeholder:text-xs md:placeholder:text-sm"
              placeholder="Type Your Email"
              type="email"
            />
            <button className="bg-gradient-to-tr from-[#0072a9] to-primary_two text-black rounded-full px-6 py-4 font-semibold mt-3 md:mt-0">
              CONNECT
            </button>
          </div>
        </div>
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#22007a] to-secondary_two/80" />
      </div>

      {/* Right Section - Partners */}
      <div className="bg-[#1a1a1a] p-6 md:p-8 lg:px-12 lg:py-24 text-center lg:text-left">
        <p className="text-primary_two mb-4 text-sm md:text-base">
          OUR PARTNER
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
          Join Our Finibus
          <br className="hidden lg:block" />
          Community.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {partnerLogos.map((logo, index) => (
            <div
              className="py-6 border border-white/10 rounded-md flex items-center justify-center"
              key={index}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="w-16 md:w-20 lg:w-24 h-auto"
                height={500}
                width={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
