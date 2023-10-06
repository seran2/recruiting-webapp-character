import { API } from "../../consts";

const Menu = ({ attribute, modifier, skill }) => {
  const saveData = async (attribute) => {
    const dataBody = [attribute, modifier, skill];
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    });
  };

  return (
    <div>
      <button onClick={() => saveData(attribute, modifier, skill)}>
        Save All Character
      </button>
    </div>
  );
};

export default Menu;
