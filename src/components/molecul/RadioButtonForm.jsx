import { RadioButton } from "primereact/radiobutton";
import React from "react";
import { Controller } from "react-hook-form";

const RadioButtonForm = ({ form, name, label, options }) => {
  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] ? (
      <div className="p-error mb-3">{form.formState.errors[name].message}</div>
    ) : null;
  };
  return (
    <Controller
      name={name}
      control={form.control}
      rules={{ required: label + " is must" }}
      render={({ field }) => (
        <div className="mb-5">
          <div className="mb-2 text-sm">{label}</div>
          <div className="flex mb-1">
            {options?.map((option,idx) => {
              return (
                <div className="flex justify-center items-center" key={idx}>
                  <RadioButton
                    {...field}
                    inputRef={field.ref}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <div className="ml-1 mr-4">
                    {option.label}
                  </div>
                </div>
              );
            })}
          </div>
          {getFormErrorMessage(field.name)}
        </div>
      )}
    />
  );
};

export default RadioButtonForm;
