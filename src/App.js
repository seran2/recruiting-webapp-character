import { useState, useEffect } from "react";
import "./App.css";
import { API } from "./consts.js";
import { getAttributeData, getModifierData, getSkillData } from "./utils.js";
import Attributes from "./components/Attributes/Attributes";
import Classes from "./components/Classes/Classes";
import Skills from "./components/Skills/Skills";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [attribute, setAttribute] = useState(getAttributeData());
  const [modifier, setModifier] = useState(getModifierData());
  const [skill, setSkill] = useState(getSkillData());

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Seran Sathivel</h1>
        <Menu attribute={attribute} modifier={modifier} skill={skill} />
      </header>
      <section className="App-section">
        <Attributes
          attribute={attribute}
          setAttribute={setAttribute}
          modifier={modifier}
          setModifier={setModifier}
        />
        <Classes attribute={attribute} />
        <Skills skill={skill} setSkill={setSkill} modifier={modifier} />
      </section>
    </div>
  );
};

export default App;
