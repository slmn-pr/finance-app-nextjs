import React from "react";

const Label = (props) => {
  return (
    <label
      {...props}
      className={`text-gray-700 dark:text-gray-300 block  ml-1  ${props.className}`}
    >
      {props.children}
    </label>
  );
};

export default Label;
