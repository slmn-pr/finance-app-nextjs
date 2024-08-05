import React, { Suspense } from "react";
import TransactionListFallback from "./components/transaction-list-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import TrendsList from "./components/trends-list";
import Range from "./components/range";
import TransactionListWrapper from "./components/transaction-list-wrapper";

const Page = ({ searchParams }) => {
  const range = searchParams?.range ?? "last30days";
  return (
    <div className="space-y-8">
      <section className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Summary</h1>

        <div>
          <Range />
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TrendsList range={range} />
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
        <TransactionListWrapper range={range} />
      </Suspense>
    </div>
  );
};

export default Page;
