import React from "react";
import PageHeader from "../../components/page-header";
import Trend from "@/components/trend";
import { TransactionItem } from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Button from "@/components/button";
import Label from "@/components/forms/label";
import Input from "@/components/forms/input";
import Select from "@/components/forms/select";

const page = () => {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={1236} />
          <Trend type="Expense" amount={12000} prevAmount={10500} />
          <Trend type="Investment" amount={7000} prevAmount={6950} />
          <Trend type="Saving" amount={500} prevAmount={501} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          TransactionItem + Transaction Item Summary
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="space-y-4">
          <TransactionSummaryItem amount={1540} date="2024-05-01" />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />

          <TransactionItem type="Income" description="Salary" amount={2000} />

          <TransactionItem
            type="Expense"
            category="Food"
            description="Food"
            amount={500}
          />

          <TransactionItem
            type="Saving"
            description="For children"
            amount={2000}
          />

          <TransactionItem
            type="Investment"
            description="In Microsoft"
            amount={10000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="space-y-4 space-x-3">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>

          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>

      {/* Inputs */}
      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="grid grid-cols-2 gap-4">
          {/* Text */}
          <div>
            <Label className="mb-3">Your Name</Label>
            <Input type="text" placeholder="Type something here ..." />
          </div>

          {/* Select */}
          <div>
            <Label className="mb-3">City</Label>

            <Select>
              <option>Warsaw</option>
              <option>Berlin</option>
              <option>London</option>
            </Select>
          </div>

          {/* Select 2 */}
          <div className="flex items-center">
            <Input type="checkbox" id="terms" />
            <Label className="ml-2" htmlFor="terms">
              Accept terms
            </Label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
