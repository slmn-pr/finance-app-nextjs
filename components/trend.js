import { useFormatCurrency } from "@/hooks/use-format-currency";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useMemo } from "react";

const Trend = ({ type, amount, prevAmount }) => {
  const colorClasses = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const calcPercentageChange = (amount, prevAmount) => {
    if (!prevAmount || !amount) return 0;

    return ((prevAmount - amount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => calcPercentageChange(amount, prevAmount).toFixed(2),
    [amount, prevAmount]
  );

  const formattedAmount = useFormatCurrency(amount);

  return (
    <div>
      {/* Type */}
      <div className={`font-semibold ${colorClasses[type]}`}> {type} </div>

      {/* Current amount */}
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formattedAmount}
      </div>

      {/*  Percentage */}
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange < 0 ? (
          <ChevronDown
            size={25}
            strokeWidth={3}
            className="text-red-700 dark:text-red-300"
          />
        ) : (
          <ChevronUp
            size={25}
            strokeWidth={3}
            className="text-green-700 dark:text-green-300"
          />
        )}
        {percentageChange}% vs last period
      </div>
    </div>
  );
};

export default Trend;
