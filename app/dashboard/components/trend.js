import BaseTrend from "@/components/trend";

const Trend = async ({ type }) => {
  const response = await fetch(`${process.env.API_URL}/trends/${type}`);
  const { amount, prevAmount } = await response.json();

  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trend;
