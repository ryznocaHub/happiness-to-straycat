import React from "react";
import { Controller } from "react-hook-form";
import { FileUpload } from "primereact/fileupload";

const InputFileForm = ({ form, name, label, rule }) => {
  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] ? (
      <div className="p-error mb-3">
        {form.formState.errors[name].message}
      </div>
    ) : null;
  };
  return (
    <Controller
      name={name}
      control={form.control}
      rules={rule ? { required: label + " is must" } : null}
      render={({ field, fieldState }) => (
        <div className="mb-8">
          <div className="mb-2 text-sm">{label}</div>
          <FileUpload
            mode="basic"
            onSelect={(e) => field.onChange(e.originalEvent.target.files[0])}
            accept="image/*"
            maxFileSize={1000000}
            chooseLabel="Choose Image"
          />
          {getFormErrorMessage(field.name)}
        </div>
      )}
    />
  );
};

export default InputFileForm;
