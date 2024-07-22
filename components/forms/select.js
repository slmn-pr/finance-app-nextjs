import React, { forwardRef } from "react";

const Select = (props, ref) => {
  return (
    <select
      {...props}
      className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
      ref={ref}
    >
      {props.children}
    </select>
  );
};

export default forwardRef(Select);
