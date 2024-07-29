import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallback from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { createClient } from "@/lib/supabase/server";

const Page = async () => {
  // const result = await fetch(`${process.env.API_URL}/trends`);

  const client = createClient();

  console.log(await client.from("transactions").select());

  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summary</h1>
      </section>
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

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl ">Transactions</h2>

        <Link
          href="/dashboard/transaction/add"
          className={`flex items-center space-x-1 ${variants["outline"]} ${sizes["sm"]} `}
        >
          <PlusCircle className="size-4" />
          <span>Add</span>
        </Link>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
