export const groupAndSumTransactionsByDate = (transactions) => {
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
      transaction.type === "Expense"
        ? -transaction.amount
        : +transaction.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};
