import { sizes, variants } from "@/lib/variants";
import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`${
        props.variant ? variants[props.variant] : variants["default"]
      } ${props.size ? sizes[props.size] : sizes["base"]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
