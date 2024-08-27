import { Ban } from "lucide-react";
import Alert from "./alert";

const AlertError = ({ message }) => {
  return (
    <Alert
      icon={<Ban className="size-4 text-red-500" />}
      title={<span className="text-red-500">Hello</span>}
    >
      {message}
    </Alert>
  );
};
export default AlertError;
