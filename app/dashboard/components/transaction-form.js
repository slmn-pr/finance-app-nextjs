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
import { createTransaction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import FormError from "@/components/forms/form-error";

const TransactionForm = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const [lastError, setLastError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    // resolver: zodResolver(transactionSchema),
  });

  const onSubmit = async (data) => {
    console.log("Onsubmit", data);
    setIsSaving(true);
    setLastError(null);

    try {
      await createTransaction(data);
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
          <Input {...register("created_at")} />
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
