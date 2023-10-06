const AttributsControls = ({
  name,
  value,
  setAttribute,
  setModifier,
  modifier,
  attribute,
}) => {
  const updateAttributePoints = (updateAmount) => {
    const totalAttributePoints = Object.values(attribute).reduce(
      (acc, val) => acc + val
    );
    if (totalAttributePoints + updateAmount > 70) {
      alert("A Character can have up to 70 Delegated Attribute Points");
      return;
    }

    setAttribute((prevState) => ({
      ...prevState,
      [name]: prevState[name] + updateAmount,
    }));
    
    const modifierValue = Math.floor((value + updateAmount - 10) / 2);
    setModifier({
      ...modifier,
      [name]: modifierValue,
    });
  };

  return (
    <div>
      {name}: {value}(Modifier:{modifier[name]})
      <button onClick={() => updateAttributePoints(1)}>+</button>
      <button onClick={() => updateAttributePoints(-1)}>-</button>
    </div>
  );
};

export default AttributsControls;
