import contactBg from "@/assets/bg/contact-bg.png";

const Contact = () => {
  return (
    <section
      className=""
      style={{
        background: `url('${contactBg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="container mx-auto py-32 relative px-4 sm:px-6 lg:px-8 ">
        <div className="md:flex items-center justify-between">
          <div className=" ">
            <span className="text-secondary_two text-sm sm:text-base font-medium tracking-wider">
              LET&#39;S TALK
            </span>

            <div className="mt-4 space-y-2 sm:space-y-4">
              <h1 className="text-4xl -mb-2 sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white">
                ABOUT YOUR NEXT
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold"
                  style={{
                    WebkitTextStroke: "2px #B473F3",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  PROJECT
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  YOUR MIND
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="rounded-full py-2.5 px-6 bg-gradient-to-tr from-secondary_one to-secondary_two text-white text-sm sm:text-base transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
