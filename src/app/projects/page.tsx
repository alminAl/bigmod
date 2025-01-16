import Title from "@/components/shared/title/Title";
import Featured from "./_components/Featured";

const page = () => {
  return (
    <div>
      <Title title="Our Projects" url="/projects" />
      <div className="max-w-7xl mx-auto">
        <Featured />
      </div>
    </div>
  );
};

export default page;
