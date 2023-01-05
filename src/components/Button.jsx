import React from "react";

const Button = ({ message }) => {
  return (
    <button className="h-16 w-48 bt-gradient my-5 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center">
      {message}
    </button>
  );
};

export default Button;
