import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Link, useNavigate } from "react-router-dom";
import InputTextForm from "@components/molecul/InputTextForm";
import { useAuthStore } from "@stores/authStore";
import { login } from "@api/api";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthStore } = useAuthStore((state) => state);
  const [message, setMessage] = useState("");
  const defaultValues = {
    username: "",
    password: "",
  };

  const form = useForm({ defaultValues });

  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] ? (
      <div className="p-error mb-3">{form.formState.errors[name].message}</div>
    ) : null;
  };

  const onSubmit = async (values) => {
    const response = await login(values);

    console.log("response", response);
    if (response && response.status == 200) {
      
      setAuthStore(response);
      navigate("/");
    } else {
      setMessage(response.data.message);
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sh drop-shadow-lg">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl ">
        <div className="text-center mb-7">
          <h2 className=" text-3xl font-bold text-gray-900">Login</h2>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {message && (
            <div className="text-rose-500 text-xm bg-gray-100 border-2 border-solid border-rose-500 rounded-md mb-8 px-3 py-2">
              {message}
            </div>
          )}
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
              <>
                <div className="mt-7 p-float-label w-full">
                  <Password
                    id={field.name}
                    {...field}
                    inputRef={field.ref}
                    className={
                      "w-full " + classNames({ "p-invalid": fieldState.error })
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
              </>
            )}
          />
          {/* <div className="flex mt-7 text-xs">
            <div className="text-grey-500">Forgot your password? </div>
            <Link to={'/forgot-password'}><div className="ml-1 underline underline-offset-8 decoration-blue-500 text-blue-500 ">Get New</div></Link>
          </div> */}
          <div className="flex justify-end items-center mt-7">
            <Link to={'/register'}><div className="mr-5 underline underline-offset-8 decoration-blue-500 text-blue-500 ">Sign Up</div></Link>
            <Button label="Login" type="submit" className="p-button-raised" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
