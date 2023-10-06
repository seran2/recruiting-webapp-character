import { ATTRIBUTE_LIST, SKILL_LIST } from "./consts.js";

const ZERO = 0;
const TEN = 10;

export const getAttributeData = () => {
  const attributeData = {};
  for (const [key, value] of Object.entries(ATTRIBUTE_LIST)) {
    attributeData[value] = TEN;
  }
  return attributeData;
};

export const getModifierData = () => {
  const ModifierData = {};
  for (const [key, value] of Object.entries(ATTRIBUTE_LIST)) {
    ModifierData[value] = ZERO;
  }
  return ModifierData;
};

export const getSkillData = () => {
  const skillData = {};
  SKILL_LIST.forEach((skillElement) => {
    skillData[skillElement.name] = ZERO;
  });
  return skillData;
};
