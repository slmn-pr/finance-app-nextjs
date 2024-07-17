import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";

const Page = () => {
  return (
    <>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
