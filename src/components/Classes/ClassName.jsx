import { useState } from "react";
import { CLASS_LIST } from "../../consts";
import MinimumRequiredStats from "./MinimumRequiredStats";

const ClassName = ({ name, attribute }) => {
  const [displayMinStats, setDisplayMinStats] = useState(false);
  let isRequirementMet = true;
  Object.entries(CLASS_LIST[name]).map(([key, value]) => {
    if (attribute[key] < value) {
      isRequirementMet = false;
    }
  });

  return (
    <div>
      <p
        style={{ color: isRequirementMet ? "red" : "white" }}
        onClick={() => setDisplayMinStats(!displayMinStats)}
      >
        {name}
      </p>
      {displayMinStats ? (
        <MinimumRequiredStats
          name={name}
          displayMinStats={displayMinStats}
          setDisplayMinStats={setDisplayMinStats}
        />
      ) : null}
    </div>
  );
};

export default ClassName;
