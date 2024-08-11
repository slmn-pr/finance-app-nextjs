import React from "react";

const NotFound = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8"> Transaction not found!</h1>

      <p className="text-gray-400 dark:text-gray-500">
        {" "}
        Transaction could not be found or could not be fetched
      </p>

      {/* <TransactionForm initialData={data} /> */}
    </>
  );
};

export default NotFound;
