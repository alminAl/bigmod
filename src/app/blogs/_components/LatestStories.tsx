import Image from "next/image";

const blogs = [
  {
    title: "The Sunset Faded to Twilight",
    date: "April 11, 2019",
    img: "/sliderImage/1.jpg",
    categories: ["Photo", "Trending"],
    description:
      "I began walking, therefore, in a big curve, seeking some point of vantage and continually looking at the sand.",
    seeMore: "/blogs/the-sunset-faded-to-twilight",
  },
  {
    title: "Exploring the Depths of the Ocean",
    img: "/sliderImage/2.jpg",
    date: "March 22, 2021",
    categories: ["Adventure", "Nature"],
    description:
      "The ocean whispered its secrets as we dived deeper, revealing a world teeming with life and mystery.",
    seeMore: "/blogs/exploring-the-depths-of-the-ocean",
  },
  {
    title: "The Journey to the Mountain Top",
    img: "/sliderImage/3.jpg",
    date: "January 15, 2020",
    categories: ["Travel", "Inspiration"],
    description:
      "Each step brought us closer to the peak, where the view stretched beyond the horizon, filling our hearts with awe.",
    seeMore: "/blogs/the-journey-to-the-mountain-top",
  },
  {
    title: "Exploring the Depths of the Ocean",
    img: "/sliderImage/2.jpg",
    date: "March 22, 2021",
    categories: ["Adventure", "Nature"],
    description:
      "The ocean whispered its secrets as we dived deeper, revealing a world teeming with life and mystery.",
    seeMore: "/blogs/exploring-the-depths-of-the-ocean",
  },
  {
    title: "Exploring the Depths of the Ocean",
    img: "/sliderImage/2.jpg",
    date: "March 22, 2021",
    categories: ["Adventure", "Nature"],
    description:
      "The ocean whispered its secrets as we dived deeper, revealing a world teeming with life and mystery.",
    seeMore: "/blogs/exploring-the-depths-of-the-ocean",
  },
  {
    title: "The Journey to the Mountain Top",
    img: "/sliderImage/3.jpg",
    date: "January 15, 2020",
    categories: ["Travel", "Inspiration"],
    description:
      "Each step brought us closer to the peak, where the view stretched beyond the horizon, filling our hearts with awe.",
    seeMore: "/blogs/the-journey-to-the-mountain-top",
  },
];

const LatestStories = () => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="pb-10">
        <p className="uppercase tracking-widest	text-xs font-bold opacity-60 pb-1">
          Browse and read the latest stuff
        </p>
        <h2 className="text-5xl font-bold">Latest Stories</h2>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="mb-8">
            {/* Image Section */}
            <div className="w-full h-80 relative">
              <Image
                src={blog.img}
                alt={`${blog.title}'s image`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <h2 className="absolute -bottom-8 bg-black text-2xl font-bold leading-tight text-white w-10/12 p-4">
                {blog.title}
              </h2>
            </div>
            {/* Content Section */}
            <div className="mt-4 p-4">
              <p className="mt-2 text-sm text-gray-500">
                {blog.date} • {blog.categories.join(", ")}
              </p>
              <div className="w-3/12 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5 mt-1" />
              <p className="mt-4 text-gray-700 text-sm">{blog.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-secondary_two font- hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestStories;
