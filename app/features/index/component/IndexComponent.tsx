import { useTheme } from "@/app/hooks/themeContext";
import ResumeIndex from "./ResumeIndex";
import AccompenyIndex from "./AccompenyIndex";
import PolaroidIndex from "./PolaroidIndex";

interface IndexComponentProp {
  id : string
}

const IndexComponent = ({id} : IndexComponentProp) => {

  console.log(id)
  return (
    <>
      {id === '1' && <ResumeIndex/>}
      {id === '2' && <AccompenyIndex/>}
      {id === '3' && <PolaroidIndex/>}
    </>
  );
};

export default IndexComponent;
