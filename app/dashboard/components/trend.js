import BaseTrend from "@/components/trend";

const Trend = async ({ type }) => {
  // const response = await fetch(`${process.env.API_URL}/trends/${type}`);
  // const { amount, prevAmount } = await response.json();

  return <BaseTrend type={type} amount={0} prevAmount={0} />;
};

export default Trend;
