"use client";

import React, { useState } from "react";
import Button from "./button";
import { BadgeX } from "lucide-react";
import { deleteTransaction } from "@/lib/actions";
import LoadingSpinner from "./loading-spinner";

const TransactionItemRemoveButton = ({ id, onRemoved }) => {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleRemove = async () => {
    if (!confirmed) {
      setConfirmed(true);
      return true;
    }

    try {
      setLoading(true);
      await deleteTransaction(id);
      onRemoved();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        size="xs"
        variant={!confirmed ? "ghost" : "danger"}
        className="hover:*:!text-red-400"
        onClick={handleRemove}
        disabled={loading}
        aria-disabled={loading}
      >
        {!loading && <BadgeX />}
        {loading && <LoadingSpinner />}
      </Button>
    </>
  );
};

export default TransactionItemRemoveButton;
