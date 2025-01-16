import Arrow from "../shared/icons/Arrow";

const Hero: React.FC = () => {
  return (
    <section
      className="container mx-auto  h-[90vh] flex items-center px-4 md:px-8"
      // style={{ background: `url(${heroBg.src})` }}
    >
      <div className="text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <button className="flex items-center gap-2 md:gap-3 rounded-full py-2.5 px-4 md:px-6 border">
            <span>About Us</span> <Arrow width={14} height={14} />
          </button>
          <button className="flex items-center gap-2 md:gap-3 rounded-full py-2.5 px-4 md:px-6 border">
            <span>How We Operate</span> <Arrow width={14} height={14} />
          </button>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold pt-6 leading-tight md:leading-none">
          To Accelerate Your Digital Business.
        </h1>

        <p className="pt-8 text-sm lg:text-base md:w-10/12 lg:w-8/12 mx-auto md:mx-0">
          Boost your digital business with our tailored solutions designed to
          maximize efficiency and propel growth. Harness cutting-edge technology
          and expert guidance for streamlined operations and staying ahead of
          the curve.
        </p>
      </div>
    </section>
  );
};

export default Hero;
