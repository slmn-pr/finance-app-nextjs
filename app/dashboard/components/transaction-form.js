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
import { createTransaction, updateTransaction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import FormError from "@/components/forms/form-error";

const TransactionForm = ({ initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
    defaultValues: initialData ?? {
      created_at: new Date().toISOString().split("T")[0],
    },
  });
  const router = useRouter();

  const [isSaving, setIsSaving] = useState(false);
  const [lastError, setLastError] = useState(null);
  const type = watch("type");

  const editing = Boolean(initialData);

  const onSubmit = async (data) => {
    setIsSaving(true);
    setLastError(null);

    try {
      if (editing) {
        await updateTransaction(initialData.id, data);
      } else {
        await createTransaction(data);
      }
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setLastError(error.message);
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
          <Select
            {...register("type", {
              onChange: (e) => {
                if (e.target.value !== "Expense") {
                  setValue("category", undefined);
                }
              },
            })}
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        {/* Categories */}
        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")} disabled={type !== "Expense"}>
            <option value="">Select a category</option>

            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
          <FormError error={errors.category?.message} />
        </div>

        {/* Transaction Date */}
        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input {...register("created_at")} disabled={editing} />
          <FormError error={errors.created_at?.message} />
        </div>

        {/* Transaction Amount */}
        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />

          <FormError error={errors.amount?.message} />
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} />

          {errors.description && (
            <FormError error={errors.description?.message} />
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>{lastError && <FormError error={lastError} />}</div>

        <Button type="submit" disabled={isSaving}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;
