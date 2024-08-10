import { useFormatCurrency } from "@/hooks/use-format-currency";
import {
  BadgeX,
  HandCoins,
  Landmark,
  Pencil,
  PiggyBank,
  Wallet,
} from "lucide-react";
import TransactionItemRemoveButton from "./transaction-item-remove-button";

export const TransactionItem = ({
  id,
  type,
  category,
  description,
  amount,
  onRemoved,
}) => {
  const formattedAmount = useFormatCurrency(amount);

  const typesMap = {
    Income: {
      icon: HandCoins,
      colors: "text-green-500 dark:text-green-400",
    },
    Expense: {
      icon: Wallet,
      colors: "text-red-500 dark:text-red-400",
    },
    Saving: {
      icon: Landmark,
      colors: "text-indigo-500 dark:text-indigo-400",
    },
    Investment: {
      icon: PiggyBank,
      colors: "text-yellow-500 dark:text-yellow-400",
    },
  };

  const IconComponent = typesMap[type].icon;
  const colors = typesMap[type].colors;

  return (
    <div className="w-full flex items-center">
      {/* Description */}
      <div className="flex items-center mr-4 grow">
        <IconComponent className={`${colors} mr-2 size-4 hidden sm:block`} />
        <span>{description}</span>
      </div>

      {/* Category */}
      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-sm bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>

      {/* Date */}
      <div className="min-w-[70px] text-right">{formattedAmount}</div>

      {/* Edit & delete section */}
      <div className="min-w-[100px] flex justify-end">
        <TransactionItemRemoveButton id={id} onRemoved={onRemoved} />
      </div>
    </div>
  );
};
