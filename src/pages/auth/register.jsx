import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import InputTextForm from "@components/molecul/InputTextForm";
import { register } from "@api/api";
import { useAuthStore } from "@stores/authStore";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import RadioButtonForm from "@components/molecul/RadioButtonForm";
import InputNumberForm from "@components/molecul/InputNumberForm";
import { InputNumber } from "primereact/inputnumber";

export const Register = () => {
  const navigate = useNavigate();
  const { setAuthStore } = useAuthStore((state) => state);
  const toast = useRef(null);
  const defaultValues = {
    name: "",
    tech: [],
    username: "",
    email: "",
    password: "",
  };
  // const toast = useRef(null);

  const genderOption = [
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Male",
      value: "male",
    },
  ];

  const form = useForm({ defaultValues });

  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] ? (
      <div className="p-error mb-3">{form.formState.errors[name].message}</div>
    ) : null;
  };

  const onSubmit = async (values) => {
    console.log("onSubmit", values);
    const response = await register(values);
    console.log("response", response);
    if (response?.status == 200 || response?.status == 201) {
      reset();
      toast.current.show({
        severity: "success",
        summary: "Register Account Success",
      });
      setAuthStore(response);
      navigate("/pet");
    } else {
      toast.current.show({
        severity: "error",
        summary: "Register Account Failed",
        detail: response.data.error_message,
      });
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sh drop-shadow-lg">
      <Toast ref={toast} />
      <div className="max-w-xl w-full space-y-8 p-10 bg-white rounded-xl ">
        <div className="text-center mb-7">
          <h2 className=" text-3xl font-bold text-gray-900">Register</h2>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-6">
              <InputTextForm
                form={form}
                label={"name"}
                name={"name"}
                rule={true}
              />
              <InputTextForm
                form={form}
                label={"email"}
                name={"email"}
                rule={true}
              />
              <Controller
                name="password"
                control={form.control}
                rules={{ required: "Password is must." }}
                render={({ field, fieldState }) => (
                  <div className="mb-8 ">
                    <div className="p-float-label w-full">
                      <Password
                        id={field.name}
                        {...field}
                        inputRef={field.ref}
                        className={
                          "w-full " +
                          classNames({ "p-invalid": fieldState.error })
                        }
                        inputClassName={"w-full "}
                        feedback={false}
                      />
                      <label
                        htmlFor={field.name}
                        className={classNames({
                          "p-error": form.formState.errors.value,
                        })}
                      >
                        Password
                      </label>
                    </div>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
              <InputTextForm
                form={form}
                label={"phone"}
                name={"phone"}
                rule={true}
              />
            </div>
            <div className="col-span-6">

              <InputTextForm
                form={form}
                label={"age (year)"}
                name={"age"}
                rule={true}
              />
              <InputTextForm
                form={form}
                label={"address"}
                name={"address"}
                rule={true}
              />
              <RadioButtonForm
                form={form}
                label={"Gender"}
                name={"gender"}
                options={genderOption}
              />
            </div>
          </div>
          <div className="flex justify-end items-center mt-7">
            <Link to={"/login"}>
              <div className="mr-5 underline underline-offset-8 decoration-blue-500 text-blue-500 ">
                Sign In
              </div>
            </Link>
            <Button
              label="Register"
              type="submit"
              className="p-button-raised"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
