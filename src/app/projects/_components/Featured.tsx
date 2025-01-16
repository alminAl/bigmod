import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const projects = [
    {
      name: "Portfolio Website",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "/projects/portfolio",
      image: "/p1.png",
    },
    {
      name: "E-Commerce Store",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      link: "/projects/ecommerce",
      image: "/p2.jpg",
    },
    {
      name: "Blog Platform",
      tags: ["Next.js", "GraphQL", "Apollo Client", "Prisma"],
      link: "/projects/blog-platform",
      image: "/p3.jpg",
    },
    {
      name: "Task Manager",
      tags: ["Vue.js", "Vuex", "Firebase", "Material Design"],
      link: "/projects/task-manager",
      image: "/p4.png",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6 py-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-span-2 md:col-span-1 overflow-hidden  mt-6"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-2xl pb-6 uppercase">• {project.name}</h2>
              <div
                key={index}
                className=" group transition-all duration-300 ease-in-out hover:scale-95"
              >
                <div className="relative overflow-hidden">
                  <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-6 pb-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-lg rounded-full border border-white/15 me-1.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
