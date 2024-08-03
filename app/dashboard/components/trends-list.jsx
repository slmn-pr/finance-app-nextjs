import { types } from "@/lib/consts";
import Trend from "./trend";
import { Suspense } from "react";
import TrendFallback from "./trend-fallback";

const TrendsList = () => {
  return (
    <>
      {types.map((type) => {
        return (
          <Suspense fallback={<TrendFallback />} key={type}>
            <Trend type={type} />
          </Suspense>
        );
      })}
    </>
  );
};

export default TrendsList;
