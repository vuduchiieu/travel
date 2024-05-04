import * as React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import icon from "@/assets/icon/icon";

interface IFormLogin {
  email: string;
  password: string;
}

const FromLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormLogin>();

  const [unmask, setUnMask] = React.useState<boolean>(false);

  // const DataError = [
  //   {
  //     type: "manual",
  //     name: "email",
  //     message: " Please double check your email ",
  //   },
  //   {
  //     type: "manual",
  //     name: "password",
  //     message: " Please double check your password ",
  //   },
  // ];

  const onSubmit = (d: IFormLogin) => {
    // DataError.map(({ type, name, message }) => {
    //   // setError(name, { type, message });
    //   console.log(message);
    // });
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
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        className="w-48 outline-double outline-cyan-500 text-xs pl-1.5 rounded-sm"
        type={unmask ? "text" : "password"}
        placeholder="Type your password"
        {...register("password", {
          required: "password is required",
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Invalid password",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <div className="absolute">
        <Image
          onClick={() => setUnMask(!unmask)}
          className="relative left-[5.5rem] bottom-[0.2rem]"
          width="14"
          height="14"
          src={unmask ? icon.eye : icon.eye_hidden}
          alt={unmask ? "eye" : "eye_hidden"}
        />
      </div>
      <button className="w-48 h-6 bg-cyan-300 text-xs text-white rounded-2xl">
        Log In
      </button>
    </form>
  );
};

export default FromLogin;
