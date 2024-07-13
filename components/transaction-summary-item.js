import { useFormatCurrency } from "@/hooks/use-format-currency";
import React from "react";

const TransactionSummaryItem = ({ date, amount }) => {
  const formattedAmount = useFormatCurrency(amount);

  return (
    <div className="flex text-gray-500 dark:text-gray-400 font-semibold">
      <div className="grow">{date}</div>
      <div className="min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>

      <div className="min-w-[50px] flex justify-center"></div>
    </div>
  );
};

export default TransactionSummaryItem;
