interface TechProps {
  title: string;
  icon: string[];
}
const TechIconComponent = ({ title, icon }: TechProps) => {
  console.log(icon);
  return (
    <div className="h-[12rem] m-6  border-solid border-gray-300 border relative rounded-lg min-w-[15rem]">
      <div className=" absolute left-0 top-0 text-[1.715rem] translate-x-[2rem] translate-y-[-1.5rem] bg-white ">
        {title}
      </div>
      <div className="py-8 px-6 flex items-center h-full gap-x-3 gap-y-2 flex-wrap">
        {icon?.length > 0 &&
          icon.map((v) => (
            <div className="min-w-[4rem] min-h-[4rem] rounded-lg shadow-custom-border-3"></div>
          ))}
      </div>
    </div>
  );
};

export default TechIconComponent;
