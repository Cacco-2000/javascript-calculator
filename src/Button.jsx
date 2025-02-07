import PropTypes from "prop-types";

const Button = ({ label, onClick, id }) => {
  return (
    <button id={id} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

Button.propTypes = 
{
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;