interface TechProps {
  title: string;
}
const TechIconComponent = ({ title }: TechProps) => {
  return (
    <div className="h-[12rem] m-6  border-solid border-gray-300 border relative rounded-lg min-w-[15rem]">
      <div className=" absolute left-0 top-0 text-[1.715rem] translate-x-[2rem] translate-y-[-1.5rem] bg-white ">
        {title}
      </div>
      <div className="flex "></div>
    </div>
  );
};

export default TechIconComponent;
