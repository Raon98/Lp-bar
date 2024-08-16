import TechIcon, { TechIconProps } from "@/app/common/component/TechIcon";

interface TechProps extends TechIconProps {
  title: string;
}

const TechIconComponent = ({ title, icon, extension }: TechProps) => {
  return (
    <div className="h-[12rem] m-6  border-solid border-gray-300 border relative rounded-lg ">
      <div className=" absolute left-0 top-0 text-[1.215rem] translate-x-[2rem] translate-y-[-0.85rem] bg-white ">
        {title}
      </div>
      <div className="py-8 px-6 flex items-center h-full gap-x-3 gap-y-2 flex-wrap">
        <TechIcon icon={icon} extension={extension}/>
      </div>
    </div>
  );
};

export default TechIconComponent;
