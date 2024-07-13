import React from "react";

const Select = (props) => {
  return (
    <select
      {...props}
      className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
    >
      {props.children}
    </select>
  );
};

export default Select;
