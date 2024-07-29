import AccompenyIndex from "./AccompenyIndex";
import PolaroidIndex from "./PolaroidIndex";

interface IndexComponentProp {
  id: string;
}

const IndexComponent = ({ id }: IndexComponentProp) => {
  return (
    <>
      {id === "2" && <AccompenyIndex />}
      {id === "3" && <PolaroidIndex />}
    </>
  );
};

export default IndexComponent;
