import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-center sm:text-left">
        Let’s work — together.
      </h2>
      <div className="py-16 md:grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:block"></div>
        <div className="col-span-1">
          <div className="py-10">
            <div className="bg-white text-black py-12 px-6 sm:px-10 -mt-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
                Start a Project
              </h2>
              <div className="py-6 space-y-2">
                <label
                  className="block text-sm"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name here..."
                  className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                />
              </div>
              <div className="md:flex items-center gap-3">
                <div className="pb-6 space-y-2 w-full md:w-1/2">
                  <label
                    className="block text-sm"
                    htmlFor="company"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Type your company name here..."
                    className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                  />
                </div>
                <div className="pb-6 space-y-2 w-full md:w-1/2">
                  <label
                    className="block text-sm"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email here..."
                    className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                  />
                </div>
              </div>
              <div className="md:flex items-center gap-3">
                <div className="pb-6 space-y-2 w-full md:w-1/2">
                  <label
                    className="block text-sm"
                    htmlFor="service"
                  >
                    Service required*
                  </label>
                  <Select>
                    <SelectTrigger className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full h-14 rounded-none border-0">
                      <SelectValue
                        placeholder="Select Your Service"
                        className="placeholder:opacity-60"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Design">Web Design</SelectItem>
                      <SelectItem value="App Design">App Design</SelectItem>
                      <SelectItem value="Developing">Developing</SelectItem>
                      <SelectItem value="Graphic Design">
                        Graphic Design
                      </SelectItem>
                      <SelectItem value="3D Design">3D Design</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="pb-6 space-y-2 w-full md:w-1/2">
                  <label
                    className="block text-sm"
                    htmlFor="budget"
                  >
                    Project budget*
                  </label>
                  <Select>
                    <SelectTrigger className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full h-14 rounded-none border-0">
                      <SelectValue
                        placeholder="Select Your Range"
                        className="placeholder:opacity-60"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="$5k-$10k">$5k-$10k</SelectItem>
                      <SelectItem value="$10k-$20k">$10k-$20k</SelectItem>
                      <SelectItem value="$35k-$50k">$35k-$50k</SelectItem>
                      <SelectItem value="$65k-$80k">$65k-$80k</SelectItem>
                      <SelectItem value="$85k-$100k">$85k-$100k</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="pb-6 space-y-2">
                <label
                  className="block text-sm"
                  htmlFor="details"
                >
                  Project details*
                </label>
                <textarea
                  name="message"
                  id="details"
                  placeholder="Tell us more about your idea..."
                  className="py-4 px-3 placeholder:text-sm bg-slate-400/10 w-full"
                  rows={5}
                ></textarea>
              </div>
              <div className="pb-5 space-y-2">
                <button
                  type="submit"
                  className="py-4 px-3 bg-gradient-to-tl from-secondary_one to-secondary_two text-white text-sm w-full"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
