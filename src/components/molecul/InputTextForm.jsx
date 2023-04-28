
import React from 'react';
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";

export default function InputTextForm({form,name,rule,label }) {
    const getFormErrorMessage = (name) => {
        return form.formState.errors[name] ? <div className="p-error mb-3">{form.formState.errors[name].message}</div> : null
    };

    return (
        <Controller
            name={name}
            control={form.control}
            rules={rule ? { required: label + ' is must'} : null}
            render={({ field, fieldState }) => (
                <div className='mb-8 '>
                    <div className="p-float-label">
                        <InputText id={field.name} value={field.value} className={"w-full " + classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                        <label htmlFor={field.name} className='capitalize'>{label}</label>
                    </div>
                    {getFormErrorMessage(field.name)}
                </div>
            )}
        />
    )
}
        