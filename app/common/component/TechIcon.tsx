import Image from "next/image";

type FrontnedIcon = "React" | "Typescript";
type BackendIcon = "java";

export type IconType = (FrontnedIcon | BackendIcon)[];

interface TechIconProps {
  icon: IconType;
}
const TechIcon = ({ icon }: TechIconProps) => {
  return (
    <>
      {icon?.length > 0 &&
        icon.map((icon) => (
          <div className="min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem] rounded-lg shadow-custom-border-3 flex justify-center items-center">
            <Image
              src={`/assets/images/${icon}.png`}
              width={100}
              height={100}
              alt="icon"
            />
          </div>
        ))}
    </>
  );
};

export default TechIcon;
