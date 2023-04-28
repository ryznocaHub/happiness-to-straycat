import React, { useRef } from 'react';
import {useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import InputTextForm from '@components/molecul/InputTextForm';
import InputNumberForm from '@components/molecul/InputNumberForm';
import RadioButtonForm from '@components/molecul/RadioButtonForm';
import MultiSelectForm from '@components/molecul/MultiSelectForm';
import InputFileForm from '@components/molecul/InputFileForm';
import _ from 'lodash';

const FormSection = ({childData, section}) => {
    const toast = useRef(null);
    const genderOption = [
        {
            label : "Female",
            value : "female" 
        },
        {
            label : "Male",
            value : "male" 
        }
    ]
    const contraceptionOption = [
        {
            label : "Yes",
            value : true
        },
        {
            label : "No",
            value : false
        }
    ]
    const foodOption = [
        {
            name : "Female",
            code : "female" 
        },
        {
            name : "Male",
            code : "male" 
        }
    ]
    const tagOption = [
        {
            name : "Agresive",
            code : "Agresive" 
        },
        {
            name : "Kindly",
            code : "Kindly" 
        },
    ]
    const immunizationOption = [
        {
            name : "Vaccine Feline Panleukopenia",
            code : "FPV" 
        },
        {
            name : "Vaccine Feline Rhinotracheitis",
            code : "FHV-1" 
        },
        {
            name : "Vaccine Feline Calicivirus",
            code : "FCV" 
        },
        {
            name : "Vaccine Rabies",
            code : "Rabies" 
        },
    ]

    const getCurrentImmunization = () =>{
        return _.forEach(childData.immunization, function(val){
            return _.filter(
                immunizationOption, function(o) {
                   return !o.code;
                }
            );
        })
    }

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };
    const defaultValues = {
        "name" : childData?.name,
        "age" : childData?.age,
        "color" : childData?.color,
        "type" : childData?.type,
        "gender" : childData?.gender,
        "contraception" : childData?.contraception,
        "immunization" : getCurrentImmunization(),
    };

    // const {
    //     control,
    //     formState: { errors },
    //     handleSubmit,
    //     getValues,
    //     reset
    // } = useForm({ defaultValues });
    console.log("def",defaultValues)
    const createForm = useForm( section == 'edit' ? {defaultValues} : {} );

    const onSubmit = (data) => {
        console.log("data",data)
        data.value && show();
        
        createForm.reset();
    };

    
    
    const onUpload = (e) => {
        console.log("data",e.originalEvent.target.files[0])
        // console.log("data",e.target.files[0])
    };

    return (
        <form onSubmit={createForm.handleSubmit(onSubmit)} className='grid grid-cols-12 gap-10'>
            <Toast ref={toast} />
            <div className='col-span-6'>
                <InputTextForm form={createForm} label={'Name'} name={'name'} rule={true} />
                <InputTextForm form={createForm} label={'Type'} name={'type'} rule={true} />
                <InputNumberForm form={createForm} label={'Age (year)'} name={'age'} />
                <InputTextForm form={createForm} label={'Color'} name={'color'} rule={true} />
                <div className='flex'>
                    <RadioButtonForm form={createForm} label={'Gender'} name={'gender'} options={genderOption} />
                    <div className='w-20'></div>
                    <RadioButtonForm form={createForm} label={'Contraception'} name={'contraception'} options={contraceptionOption}/>
                </div>
            </div>
            <div className='col-span-6'>
                <MultiSelectForm form={createForm} label={'Favorite Food'} name={'favorite_food'} rule={true}  options={foodOption} />
                <MultiSelectForm form={createForm} label={'Tag'} name={'tags'} rule={false}  options={tagOption} />
                <MultiSelectForm form={createForm} label={'Immunization'} name={'immunization'} rule={false}  options={immunizationOption} />
                <InputFileForm  form={createForm} label={'Image'} name={'image'} rule={true}  />                
                
                <Button label="Create" type="submit" />
            </div>
        </form>
    )
}

export default FormSection