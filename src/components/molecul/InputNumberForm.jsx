import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";

const InputNumberForm = ({form, label, name}) => {
    const [value,setValue] = useState()
    const getFormErrorMessage = (name) => {
        return form.formState.errors[name] ? <div className="p-error mb-3">{form.formState.errors[name].message}</div> : null
    };

    return (
    <Controller
        name={name}
        control={form.control}
        rules={
            {
                required: label + ' is must',
                validate: (value) => (value >= 1 && value <= 50) || 'Enter a valid '+ label
            }
        }
        render={({ field, fieldState }) => (
            <div className='mb-8'>
                <div className="p-float-label">
                    <InputNumber id={field.name} value={value} onChange={()=> console.log("e")} className='w-full' inputClassName={classNames({ 'p-invalid': fieldState.error })} />
                    <label htmlFor={field.name} className='capitalize'>{label}</label>
                </div>
                {getFormErrorMessage(field.name)}
            </div>
        )}
    />
  )
}

export default InputNumberForm