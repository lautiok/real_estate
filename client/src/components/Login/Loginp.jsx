import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import "./login.css";

export const Loginp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, isAuth, } = useAuth();
  const navigate = useNavigate();



  const onSubmit = handleSubmit( async (data) => {
    try {
     await singin(data);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  });

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth]);

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login">
        <form onSubmit={onSubmit} className="login-form">
          <input
            type="email"
            {...register(
              "email",
              { required: true },
              { pattern: /^\S+@\S+$/i }
            )}
            placeholder="Email"
          />
          {errors.email && <p>Email is required</p>}
          <input
            type="password"
            {...register(
              "password",
              { minLength: 6 },
              { maxLength: 15 },
              { required: true },
            )}
            placeholder="Password"
          />
          {errors.password && <p>Password is required, min 6 and max 15</p>}
          <button type="submit">Login</button>
        </form>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
