"use client";

import Button from "@/components/button";
import Separator from "@/components/separator";
import { TransactionItem } from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import { fetchTransactions } from "@/lib/actions";
import { groupAndSumTransactionsByDate } from "@/lib/utils";
import { useState } from "react";
import { Loader } from "lucide-react";

const TransactionList = ({ range, initialTransactions }) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const grouped = groupAndSumTransactionsByDate(transactions);

  const [offset, setOffset] = useState(initialTransactions.length);
  const [loading, setLoading] = useState(false);

  const [buttonHidden, setButtonHidden] = useState(
    initialTransactions.length === 0
  );

  const handleClick = async (e) => {
    setLoading(true);

    let nextTransactions = null;

    try {
      nextTransactions = await fetchTransactions(range, offset, 10);

      setButtonHidden(nextTransactions.length === 0);
      setOffset((prev) => prev + 10);
      setTransactions((prev) => [...prev, ...nextTransactions]);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoved = (id) => () => {
    setTransactions((prev) => [...prev].filter((t) => t.id !== id));
  };

  return (
    <section className="space-y-4">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                {/* {JSON.stringify(transaction)} */}
                <TransactionItem
                  {...transaction}
                  onRemoved={handleRemoved(transaction.id)}
                />
              </div>
            ))}
          </section>
        </div>
      ))}

      {transactions.length === 0 && (
        <div className="text-center text-gray-400 dark:text-gray-500">
          No transactions found
        </div>
      )}

      {!buttonHidden && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={handleClick}
            disabled={loading || initialTransactions?.length === 0}
          >
            <div className="flex items-center space-x-1">
              {loading && <Loader className="animate-spin" />}
              Load more
            </div>
          </Button>
        </div>
      )}
    </section>
  );
};

export default TransactionList;
