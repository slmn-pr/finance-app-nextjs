"use client";

import DateRangeSelect from "@/components/forms/date-range-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Range = ({ defaultValue }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const range = searchParams.get("range") ?? defaultValue ?? "last30days";

  const handleChange = (e) => {
    const params = new URLSearchParams();
    params.set("range", e.target.value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DateRangeSelect
      value={range}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default Range;
