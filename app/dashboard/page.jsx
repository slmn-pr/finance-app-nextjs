import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";

import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import TrendsList from "./components/trends-list";
import Range from "./components/range";

const Page = () => {
  return (
    <>
      <section className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Summary</h1>

        <div>
          <Range />
        </div>
      </section>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TrendsList />
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
