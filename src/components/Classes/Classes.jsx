import { CLASS_LIST } from "../../consts";
import ClassName from "./ClassName";

const Classes = ({ attribute }) => {
  return (
    <section className="Component-section">
      <h1>Classes</h1>
      {Object.entries(CLASS_LIST).map(([name]) => (
        <ClassName key={name} name={name} attribute={attribute} />
      ))}
    </section>
  );
};

export default Classes;
