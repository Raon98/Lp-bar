import Image from "next/image";
import { cn } from "../utils/cn";

type Frontned = "React" | "Typescript" | "Javascript" | "Next" | "Vue";
type Backend = "Java";
type Database = "MariaDB" | "Mybatis";
type Styling = "Sass" | "Tailwind" | "Css" | "Styled-component";
type State = "Recoil" | "Zustand" | "ReactQuery";
type Cloud = "AwsEc2" | "GoogleCloud";
type CiCd = "Docker" | "Vercel" | "GitAction";

type Extention = "svg" | "png" | "jpg";
type IconType = (
  | Frontned
  | Backend
  | Database
  | Styling
  | State
  | Cloud
  | CiCd
)[];

export interface TechIconProps {
  icon: IconType;
  extension?: Extention;
}
const TechIcon = ({ icon, extension }: TechIconProps) => {
  return (
    <>
      {icon?.length > 0 &&
        icon.map((icon, idx) => (
          <div className="flex flex-col items-center" key={idx}>
            <div
              className={cn(
                "min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem] rounded-lg shadow-custom-border-3 flex justify-center items-center object-cover"
              )}
            >
              <Image
                src={`/assets/images/icon/${icon}.${extension || "png"}`}
                width={100}
                height={100}
                alt="icon"
                className={cn(icon === "Recoil" && "w-[30%]")}
              />
            </div>
            <div className="text-[0.785rem] mt-2 text-[rgba(0,0,0,0.8)]">
              {icon}
            </div>
          </div>
        ))}
    </>
  );
};

export default TechIcon;
