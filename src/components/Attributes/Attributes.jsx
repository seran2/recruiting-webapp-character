import AttributsControls from "./AttributsControls";

const Attributes = ({ attribute, setAttribute, modifier, setModifier }) => {
  return (
    <section className="Component-section">
      <h1>Attributes</h1>
      {Object.entries(attribute).map(([name, value]) => (
        <AttributsControls
          key={name}
          name={name}
          value={value}
          setAttribute={setAttribute}
          setModifier={setModifier}
          modifier={modifier}
          attribute={attribute}
        />
      ))}
    </section>
  );
};

export default Attributes;
