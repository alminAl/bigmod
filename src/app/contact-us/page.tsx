import Title from "@/components/shared/title/Title";
import contactBg from "@/assets/location.png";

const ContactUs = () => {
  return (
    <div>
      <Title title="Contact Us" url="/contact-us" />
      <div className="container mx-auto">
        <div className="py-20">
          <p className="">DIT Road, 3rd Floor, West Rampura,</p>
          <p className="">Dhaka, Bangladesh</p>
        </div>
        <div
          className=""
          style={{
            background: `url(${contactBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-3">
            <div className="col-span-2"></div>

            <div className="pe-10 pb-10">
              <div className="bg-white text-black py-12 px-10 -mt-16">
                <h2 className="text-2xl font-semibold">Contact.</h2>
                <div className="py-6 space-y-2">
                  <label className="block text-xs" htmlFor="name">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type your name here... "
                    className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                  />
                </div>
                <div className="pb-6 space-y-2">
                  <label className="block text-xs" htmlFor="email">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email here... "
                    className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                  />
                </div>
                <div className="pb-6 space-y-2">
                  <label className="block text-xs" htmlFor="email">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write your message here... "
                    className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                    rows={5}
                  ></textarea>
                </div>
                <div className="pb-5 space-y-2">
                  <button
                    type="submit"
                    className="py-4 px-3  bg-gradient-to-tr from-secondary_one to-secondary_two text-white text-sm w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
