import TechIcon, { IconType } from "@/app/common/component/TechIcon";

interface TechProps {
  title: string;
  icon: IconType;
}
const TechIconComponent = ({ title, icon }: TechProps) => {
  return (
    <div className="h-[12rem] m-6  border-solid border-gray-300 border relative rounded-lg min-w-[15rem]">
      <div className=" absolute left-0 top-0 text-[1.715rem] translate-x-[2rem] translate-y-[-1.5rem] bg-white ">
        {title}
      </div>
      <div className="py-8 px-6 flex items-center h-full gap-x-3 gap-y-2 flex-wrap">
        <TechIcon icon={icon} />
      </div>
    </div>
  );
};

export default TechIconComponent;
