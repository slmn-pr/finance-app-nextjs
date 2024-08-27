import { Check } from "lucide-react";
import Alert from "./alert";

const AlertSuccess = ({message}) => {
  return (
    <Alert
      icon={<Check className="size-4 text-green-500" />}
      title={<span className="text-green-500">Hello</span>}
    >
      {message}
    </Alert>
  );
};
export default AlertSuccess;
