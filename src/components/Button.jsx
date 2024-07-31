import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleClick}
    >
      Book Now
    </button>
  );
};

export default Button;
