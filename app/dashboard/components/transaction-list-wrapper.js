import { createClient } from "@/lib/supabase/server";
import TransactionList from "./transaction-list";
import { fetchTransactions } from "@/lib/actions";

const TransactionListWrapper = async ({ range }) => {
  const transactions = await fetchTransactions(range);
  return <TransactionList initialTransactions={transactions} />;
};

export default TransactionListWrapper;
