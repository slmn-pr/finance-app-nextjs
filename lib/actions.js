"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";
import { transactionSchema } from "./validation";

export async function createTransaction(formData) {
  // Validate data
  const validation = transactionSchema.safeParse(formData);

  if (!validation.success) {
    throw new Error("Invalid data");
  }

  const { error } = await createClient()
    .from("transactions")
    .insert(validation.data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard");

  // console.error("error", error);
}

export const fetchTransactions = async (range, offset = 0, limit = 10) => {
  const client = createClient();

  const { data, error } = await client.rpc("fetch_transactions", {
    range_arg: range,
    offset_arg: offset,
    limit_arg: limit,
  });
  if (error) throw new Error("We cant fetch transactions");

  return data;
};

export const deleteTransaction = async (id) => {
  const suapbase = createClient();
  const { error } = await suapbase.from("transactions").delete().eq("id", id);

  if (error) throw new Error(`Delete transaction failed, transaction ${id}`);

  revalidatePath("/dashboard");
};
