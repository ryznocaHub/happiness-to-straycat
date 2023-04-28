import React from "react";
import { MultiSelect } from "primereact/multiselect";
import { Controller } from "react-hook-form";

const MultiSelectForm = ({ form, name, label, rule, options }) => {
  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] ? (
      <div className="p-error mb-3">{form.formState.errors[name].message}</div>
    ) : null;
  };
  return (
    <Controller
      name={name}
      control={form.control}
      rules={rule ? { required: label + " is must" } : null}
      render={({ field }) => (
        <div className="mb-5">
          <div className="p-float-label">
            <MultiSelect
              filter 
              display="chip"
              value={field.value}
              options={options}
              onChange={(e) => {field.onChange(e.value); console.log("multi", e.value)}}
              optionLabel="name"
            //   maxSelectedLabels={3}
              className="w-full md:w-20rem"
            />
            <label htmlFor={field.name}>{label}</label>
          </div>
          {getFormErrorMessage(field.name)}
        </div>
      )}
    />
  );
};

export default MultiSelectForm;
