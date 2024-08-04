import BaseTrend from "@/components/trend";
import { createClient } from "@/lib/supabase/server";
import { ErrorBoundary } from "react-error-boundary";

const Trend = async ({ type, range }) => {
  const supabase = createClient();

  let { data, error } = await supabase.rpc("calculate_total", {
    type_arg: type,
    range_arg: range,
  });
  if (error) console.error(error);
  // throw new Error("Something wrong!")
  else console.log(data);

  const amount = data?.length ? data[0].current_amount : 0;
  const prevAmount = data?.length ? data[0].previous_amount : 0;

  return (
    <ErrorBoundary fallback={<>Error</>}>
      <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />
    </ErrorBoundary>
  );
};

export default Trend;
