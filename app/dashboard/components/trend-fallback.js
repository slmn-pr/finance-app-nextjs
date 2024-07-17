import Skeleton from "@/components/skeleton";
import React from "react";

const TrendFallback = () => {
  return (
    <div className="space-y-6 w-3/5 lg:w-5/6">
      {/* Type */}
      <div>
        <Skeleton />
      </div>

      {/* Current amount */}
      <div className="text-2xl  mb-2">
        <Skeleton />
      </div>

      {/*  Percentage */}
      <div className="flex space-x-2">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default TrendFallback;
