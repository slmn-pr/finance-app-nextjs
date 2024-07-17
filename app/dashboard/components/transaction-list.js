import Separator from "@/components/separator";
import { TransactionItem } from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";

const groupAndSumTransactionsByDate = (transactions) => {
  const grouped = {};

  for (const transaction of transactions) {
    // Grouped by date 📅
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }
    grouped[date].transactions.push(transaction);

    // Calculate sum of amounts 🧮
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};

const TransactionList = async () => {
  const response = await fetch("http://localhost:3100/transactions");
  const transactions = await response.json();
  const grouped = groupAndSumTransactionsByDate(transactions);

  return (
    <section className="space-y-4">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </section>
  );
};

export default TransactionList;