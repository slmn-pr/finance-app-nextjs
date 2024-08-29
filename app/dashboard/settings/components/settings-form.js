"use client";

import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import DateRangeSelect from "@/components/forms/date-range-select";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import SubmitButton from "@/components/forms/submit-button";
import { updateSettings } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  error: false,
  errors: {},
};
const SettingsForm = ({ defaultSettings }) => {
  const [state, formAction] = useFormState(updateSettings, initialState);

  return (
    <form className="space-y-4" action={formAction}>
      {state?.error && <AlertError message={state?.message} />}

      {!state?.error && state?.message.length > 0 && (
        <AlertSuccess message="Success ✅" />
      )}

      <Label htmlFor="full-name">User full name</Label>
      <Input
        type="text"
        name="full-name"
        id="full-name"
        placeholder="User full name"
        defaultValue={defaultSettings?.fullName}
      />

      <Label htmlFor="default-range">Default transactions view</Label>
      <DateRangeSelect
        name="default-range"
        id="default-range"
        defaultValue={defaultSettings?.defaultView}
      />

      <SubmitButton>Update settings</SubmitButton>
    </form>
  );
};

export default SettingsForm;
