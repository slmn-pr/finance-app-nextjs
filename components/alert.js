const Alert = ({ title, icon, children }) => {
  return (
    <div className="p-2 rounded-md border border-gray-200 dark:border-gray-800 flex space-x-2">
      <div className="flex-shrink-0">{icon}</div>

      <div className="spacey-1">
        <h5>{title}</h5>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
