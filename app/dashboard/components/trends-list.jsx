import { types } from "@/lib/consts";
import Trend from "./trend";
import { Suspense } from "react";
import TrendFallback from "./trend-fallback";
// import { useSearchParams } from "next/navigation";

const TrendsList = ({ range }) => {
  return (
    <>
      {types.map((type) => {
        return (
          <Suspense fallback={<TrendFallback />} key={type}>
            <Trend type={type} range={range} />
          </Suspense>
        );
      })}
    </>
  );
};

export default TrendsList;
