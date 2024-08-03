import BaseTrend from "@/components/trend";
import { createClient } from "@/lib/supabase/server";
import { ErrorBoundary } from "react-error-boundary";

const Trend = async ({ type }) => {
  const supabase = createClient();

  let { data, error } = await supabase.rpc("calculate_total", {
    type_arg: type,
  });
  if (error) throw new Error("Something wrong!");
  else console.log(data);

  const amount = data ?? 0;

  return (
    <ErrorBoundary fallback={<>Error</>}>
      <BaseTrend type={type} amount={amount} prevAmount={amount - 500} />
    </ErrorBoundary>
  );
};

export default Trend;
