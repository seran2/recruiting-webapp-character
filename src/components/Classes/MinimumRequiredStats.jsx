import { CLASS_LIST } from "../../consts";

const MinimumRequiredStats = ({
  name,
  displayMinStats,
  setDisplayMinStats,
}) => {
  const list = Object.entries(CLASS_LIST[name]).map(([key, value]) => (
    <p key={key}>
      {key} : {value}
    </p>
  ));
  return (
    <div style={{ border: "3px solid white" }}>
      {<h1>{name} Minimum Requirements</h1>}
      {list}
      <button onClick={() => setDisplayMinStats(!displayMinStats)}>
        Close
      </button>
    </div>
  );
};

export default MinimumRequiredStats;
