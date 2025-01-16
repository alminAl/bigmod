import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import TwitterIcon from "../icons/TwitterIcon";
import PinterestIcon from "../icons/PinterestIcon";
import footerBg from "@/assets/bg/footer-bg.png";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: <FacebookIcon />,
      url: "https://facebook.com",
    },
    {
      id: 2,
      name: "Twitter",
      icon: <TwitterIcon height={20} width={20} />,
      url: "https://twitter.com",
    },
    {
      id: 3,
      name: "Pinterest",
      icon: <PinterestIcon />,
      url: "https://pinterest.com",
    },
  ];

  const services = [
    { id: 1, name: "Strategy & Research", route: "/strategy-research" },
    { id: 2, name: "Web Development", route: "/web-development" },
    { id: 3, name: "Web Solution", route: "/web-solution" },
    { id: 4, name: "Digital Marketing", route: "/digital-marketing" },
    { id: 5, name: "App Design", route: "/app-design" },
    { id: 6, name: "App Development", route: "/app-development" },
  ];
  const navigationLinks = [
    { id: 1, name: "About Us", route: "/about-us" },
    { id: 2, name: "Services", route: "/services" },
    { id: 3, name: "Project", route: "/project" },
    { id: 4, name: "Blog", route: "/blog" },
    { id: 5, name: "Career", route: "/career" },
    { id: 6, name: "Pricing Plan", route: "/pricing-plan" },
  ];
  const policies = [
    { id: 1, name: "Privacy Policy", route: "/privacy-policy" },
    { id: 2, name: "Terms of Use", route: "/terms-of-use" },
    { id: 3, name: "Support Policy", route: "/support-policy" },
    { id: 4, name: "Terms of Service", route: "/terms-of-service" },
  ];

  return (
    <footer
      className="bg-secondary_dark text-gray-200 pt-24 pb-16 px-5"
      style={{ background: `url(${footerBg.src})` }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Office Section */}
        <div>
          <Logo width={165} className="h-16" />
          <h2 className="text-xl font-semibold mt-4">Office</h2>
          <div className="w-10 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
          <p className="text-sm">
            Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white rounded-xl p-0.5 border flex items-center justify-center w-10 h-10 border-white/5"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className="text-xl font-semibold">Our Services</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={service.route} className="">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold">Company</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
          <ul className="space-y-2 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.route} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h2 className="text-xl font-semibold">Contacts</h2>
          <div className="w-16 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">+880 255 128 071</li>
            <li className="flex items-center text-sm">+880 151 562 0108</li>
            <li className="flex items-center text-sm">info@bigmodtech.com</li>
            <li className="flex items-center text-sm">
              Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t border-gray-700 mt-14 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2024 Bigmod Technologies</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-sm flex-wrap">
          {policies.map((policy) => (
            <li key={policy.id}>
              <Link href={policy.route} className=" hover:underline">
                {policy.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
