"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";
import { transactionSchema } from "./validation";
import { TurtleIcon } from "lucide-react";
import { redirect } from "next/navigation";

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

export const updateTransaction = async (id, formData) => {
  // Validate data
  const validation = transactionSchema.safeParse(formData);

  if (!validation.success) {
    throw new Error("Invalid data");
  }

  const { error } = await createClient()
    .from("transactions")
    .update(validation.data)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard");
};

export const login = async (prevState, formData) => {
  const email = formData.get("email");

  const supabaseClient = createClient();
  const { error, data } = await supabaseClient.auth.signInWithOtp({
    email,
    // options: {
    //   shouldCreateUser: true,
    // },
  });
  console.log("Login 🔥", data);

  if (error) {
    console.error("🔒Auth error", error);

    return {
      message: "Error authenticating ",
      error: true,
    };
  }

  return {
    message: `Email sent to ${email}`,
    error: false,
  };
};

export const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  redirect("/login");
};

export const uploadAvatar = async (prevState, formData) => {
  const supabase = createClient();

  const file = formData.get("file");

  // Original extension
  const fileExtension = String(file.name).split(".").pop();

  // File name would be generated
  const fileName = `${Math.random()}.${fileExtension}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, file);

  if (error) {
    return {
      error: true,
      message: "Error upload avatar",
    };
  }

  // Remove old file
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    return {
      error: true,
      message: "Something went wrong, try again!",
    };
  }

  const avatar = userData.user.user_metadata?.avatar;
  if (avatar) {
    const { error } = await supabase.storage.from("avatars").remove([avatar]);

    if (error) {
      return {
        error: true,
        message: "Something went wrong, try again!",
      };
    }
  }

  const { error: dataUpdateError } = await supabase.auth.updateUser({
    data: {
      avatar: fileName,
    },
  });

  if (dataUpdateError) {
    return {
      error: true,
      message: "Error associating avatar with the user",
    };
  }

  return {
    error: false,
    message: "UPdated the user avatar",
  };
};
