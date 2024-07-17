import Skeleton from "@/components/skeleton";
import React from "react";

const TransactionItemSkelton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-center mr-4 grow">
        <Skeleton />
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton />
      </div>

      <div className="min-w-[70px] text-right">
        <Skeleton />
      </div>

      <div className="min-w-[50px] flex justify-end">
        <Skeleton />
      </div>
    </div>
  );
};

const TransactionItemSummarySkeleton = () => {
  return (
    <div className="flex space-x-4">
      <div className="grow">
        <Skeleton />
      </div>
      <div className="min-w-[70px] ">
        <Skeleton />
      </div>

      <div className="min-w-[50px] "></div>
    </div>
  );
};

const TransactionListFallback = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <TransactionItemSummarySkeleton />
        <TransactionItemSkelton />
        <TransactionItemSkelton />

        <TransactionItemSummarySkeleton />
        <TransactionItemSkelton />
      </section>

      <section className="space-y-4">
        <TransactionItemSummarySkeleton />
        <TransactionItemSkelton />
        <TransactionItemSkelton />
        <TransactionItemSkelton />
      </section>
    </div>
  );
};

export default TransactionListFallback;
