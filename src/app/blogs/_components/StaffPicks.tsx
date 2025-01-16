import Image from "next/image";
import Link from "next/link";

export function StaffPicks() {
  const articles = [
    {
      title: "Can you catch the expression of the whale?",
      date: "March 15, 2024",
      category: "Staff's Picks",
      image: "/sliderImage/1.jpg",
      slug: "whale-expression",
    },
    {
      title: "What art thrusting that thief-catcher into my face?",
      date: "January 22, 2024",
      category: "Staff's Picks",
      image: "/sliderImage/2.jpg",
      slug: "thief-catcher",
    },
    {
      title: "The man liberally provides the brains",
      date: "August 23, 2023",
      category: "Staff's Picks",
      image: "/sliderImage/3.jpg",
      slug: "brains",
    },
    {
      title: "Can you catch the expression of the whale?",
      date: "March 15, 2024",
      category: "Staff's Picks",
      image: "/sliderImage/1.jpg",
      slug: "whale-expression",
    },
  ];
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          You have to read this!
        </p>
        <p className="text-5xl font-bold mb-6">Staff&#39;s Picks</p>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="col-span-3 aspect-square md:aspect-[1/1]">
            <div className=" relative h-full">
              <Image
                src="/sliderImage/3.jpg"
                alt="Spotlight with glasses"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
            <div className=" p-4 space-y-4">
              <h3 className="text-4xl font-bold">
                How surprised he&#39;ll be when he finds out
              </h3>
              <div className="">
                <div className="mt-2 text-xs text-muted-foreground">
                  <span>March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Staff&#39;s Picks</span>
                </div>
                <div className="w-2/12 h-[1px] bg-red-700 my-1"></div>
              </div>
              <div className="">
                <p className="mt-2 text-sm text-muted-foreground">
                  It did no collared, and much sooner than she had expected.How
                  surprised be when he finds out
                </p>
                <a
                  href="#"
                  className="text-xs inline-block text-red-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
          <div className="space-y- col-span-2">
            {articles?.map((article, index) => (
              <Link
                key={index}
                href={`/articles/`}
                className={"flex items-start gap-5"}
              >
                <div className="w-52 h-52 md:aspect-[1/1]">
                  <Image
                    width={200}
                    height={200}
                    src={article.image}
                    alt={article.title}
                    className="w-52 h-52 object-cover"
                  />
                </div>
                <div className="space-y-5">
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {article.title}
                  </h3>
                  <div className="">
                    <div className="mt-2 text-xs text-muted-foreground  opacity-90">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                    <div className="w-2/12 h-0.5 bg-red-700 my-1"></div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    It did no collared, and much sooner than she had
                    expected.How surprised be when he finds out. t did no
                    collared, and much sooner than she had expected.How
                    surprised be when he finds out
                  </p>
                  <div className="flex items-center gap-2 "></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
