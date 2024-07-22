import Button from "@/components/button";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Select from "@/components/forms/select";
import { categories, types } from "@/lib/consts";

const TransactionForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Type */}
        <div>
          <Label className="mb-1">Type</Label>
          <Select>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        {/* Categories */}
        <div>
          <Label className="mb-1">Category</Label>
          <Select>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>

        {/* Transaction Date */}
        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input type="date" />
        </div>

        {/* Transaction Amount */}
        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <Label className="mb-1">Description</Label>
          <Input />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default TransactionForm;