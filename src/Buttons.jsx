import Button from "./Button";
import PropTypes from "prop-types";

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    { label: "7", id: "seven" },
    { label: "8", id: "eight" },
    { label: "9", id: "nine" },
    { label: "/", id: "divide" },
    { label: "4", id: "four" },
    { label: "5", id: "five" },
    { label: "6", id: "six" },
    { label: "*", id: "multiply" },
    { label: "1", id: "one" },
    { label: "2", id: "two" },
    { label: "3", id: "three" },
    { label: "-", id: "subtract" },
    { label: "0", id: "zero" },
    { label: ".", id: "decimal" },
    { label: "=", id: "equals" },
    { label: "+", id: "add" },
    { label: "C", id: "clear" }
  ];

  const handleClick = (value) => {
    onButtonClick(value);
  };

  return (
    <div className="buttons">
      {buttons.map((btn) => (
        <Button key={btn.id} label={btn.label} id={btn.id} onClick={handleClick} />
      ))}
    </div>
  );
};

Buttons.propTypes = 
{
    onButtonClick: PropTypes.func.isRequired,
};

export default Buttons;