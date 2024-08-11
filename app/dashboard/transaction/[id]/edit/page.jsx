import TransactionForm from "@/app/dashboard/components/transaction-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Edit transaction",
};

const Page = async ({ params: { id } }) => {
  const supabaseClient = createClient();

  const { data, error } = await supabaseClient
    .from("transactions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Edit transaction</h1>

      <TransactionForm initialData={data} />
    </>
  );
};

export default Page;
