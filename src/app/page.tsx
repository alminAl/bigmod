import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <About />
      <Newsletter />
      <Contact />
    </div>
  );
}
