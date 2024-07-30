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
