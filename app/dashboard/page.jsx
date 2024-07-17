import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallback from "./components/trend-fallback";

const Page = async () => {
  const result = await fetch("http://localhost:3100/trends");

  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendFallback />}>
          <Trend type="Income" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trend type="Expense" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trend type="Saving" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trend type="Investment" />
        </Suspense>   
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
