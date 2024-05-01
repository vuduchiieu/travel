import { error } from "console";
import * as React from "react";
import { useForm } from "react-hook-form";

interface IFormLogin {
  email: string;
  password: string;
}

const IFromLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormLogin>();

  const DataError = [
    {
      type: "manual",
      name: "email",
      message: " Please double check your email ",
    },
    {
      type: "manual",
      name: "password",
      message: " Please double check your password ",
    },
  ];

  const onSubmit = (d: IFormLogin) => {
    DataError.map(({ type, name, message }) => {
      setError(name, { type, message });
      console.log(message);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col items-center gap-2 justify-around"
      action=""
    >
      <input
        className="w-48 outline-double outline-cyan-500 text-xs pl-1.5 rounded-sm"
        type="text"
        placeholder="Type your account"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Email must be correctly",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        className="w-48 outline-double outline-cyan-500 text-xs pl-1.5 rounded-sm"
        type="password"
        placeholder="Type your password"
        {...register("password", {
          required: "password is required",
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button className="w-48 h-6 bg-cyan-300 text-xs text-white rounded-2xl">
        Log In
      </button>
    </form>
  );
};

export default IFromLogin;
