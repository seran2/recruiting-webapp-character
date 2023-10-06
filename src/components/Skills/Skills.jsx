import { SKILL_LIST } from "../../consts";

const Skills = ({ skill, setSkill, modifier }) => {
  const maxSkillPointsCalculation = modifier["Wisdom"] * 4 + 10;
  const maxSkillPoints =
    maxSkillPointsCalculation >= 0 ? maxSkillPointsCalculation : 0;

  const updateSkillPoints = (updateAmount, name) => {
    const totalSkillPoints = Object.values(skill).reduce(
      (acc, val) => acc + val
    );
    if (totalSkillPoints + updateAmount > maxSkillPoints) {
      alert("You need more skill points! Upgrade intelligence to get more");
      return;
    }
    setSkill((prevState) => ({
      ...prevState,
      [name]: prevState[name] + updateAmount,
    }));
  };
  const skillsList = SKILL_LIST.map((skillElement) => (
    <div key={skillElement.name}>
      {skillElement.name}:{skill[skillElement.name]}(Modifier:
      {skillElement.attributeModifier}):
      {modifier[skillElement.attributeModifier]}
      <button onClick={() => updateSkillPoints(1, skillElement.name)}>+</button>
      <button onClick={() => updateSkillPoints(-1, skillElement.name)}>-</button>
      total:
      {skill[skillElement.name] + modifier[skillElement.attributeModifier]}
    </div>
  ));

  return (
    <section className="Component-section">
      <h1>Skills</h1>
      <p>Total Skill Points Availabe {maxSkillPoints}</p>
      {skillsList}
    </section>
  );
};

export default Skills;
