import { sizes, variants } from "@/lib/variants";
import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`disabled:cursor-not-allowed ${
        props.variant ? variants[props.variant] : variants["default"]
      } ${props.size ? sizes[props.size] : sizes["base"]} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
