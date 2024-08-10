import { Loader } from "lucide-react";
import React from "react";

const LoadingSpinner = (className = "") => {
  return <Loader className={`size-6 animate-spin ${className}`} />;
};

export default LoadingSpinner;
