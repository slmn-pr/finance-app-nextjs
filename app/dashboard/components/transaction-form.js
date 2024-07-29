"use client";

import Button from "@/components/button";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Select from "@/components/forms/select";
import { categories, types } from "@/lib/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@/lib/validation";
import { useState } from "react";
import { purgeTransactionListCache } from "@/lib/actions";
import { useRouter } from "next/navigation";

const ErrorMessage = ({ error }) => {
  return <p className="mt-1 text-red-500">{error}</p>;
};

const TransactionForm = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit = async (data) => {
    setIsSaving(true);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/transactions`;
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          created_at: `${data.date}T00:00:00`,
        }),
      });
      await purgeTransactionListCache();
      router.push("/dashboard");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Form body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Type */}
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type")}>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        {/* Categories */}
        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>

        {/* Transaction Date */}
        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input {...register("date")} />

          {errors.date && <ErrorMessage error={errors.date.message} />}
        </div>

        {/* Transaction Amount */}
        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />

          {errors.amount && <ErrorMessage error={errors.amount.message} />}
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} />

          {errors.description && (
            <ErrorMessage error={errors.description.message} />
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSaving}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;
