"use client";

import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { updateSettings } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  error: false,
};
const SettingsForm = ({ defaultSettings }) => {
  const [state, formAction] = useFormState(updateSettings, initialState);
  console.log("🌠", defaultSettings);

  return (
    <form className="space-y-4">
      {state.error && <AlertError message={state.message} />}

      {!state.error && state.message.length > 0 && (
        <AlertSuccess message="Success ✅" />
      )}

      <Input type="text" name="" id="file" />
      <SubmitButton>Update settings</SubmitButton>
    </form>
  );
};

export default SettingsForm;
