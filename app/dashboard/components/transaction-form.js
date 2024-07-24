"use client";

import Button from "@/components/button";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Select from "@/components/forms/select";
import { categories, types } from "@/lib/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@/lib/validation";

const ErrorMessage = ({ error }) => {
  return <p className="mt-1 text-red-500">{error}</p>;
};

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit = (data) => console.log("⭐", data);

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
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default TransactionForm;
