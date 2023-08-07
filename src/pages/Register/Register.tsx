import { FC } from "react";
import { Card } from "../../components/Card";
import { useRegister } from "./useRegister";
import { BeatLoader } from "react-spinners";
import "../../common/styles/formStyles.css";
import { RegisterErrorMap } from "./RegisterErrorMap";
import { emailRegex } from "../../common/utils/emailRegex";

export const Register: FC = () => {
  const { errorCode, loading, handleSubmit, register, errors } = useRegister();

  return (
    <Card>
      {loading ? (
        <BeatLoader />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Full Name"
            {...register("name", {
              required: { value: true, message: "Full name is required" },
            })}
          />
          {errors.name && (
            <span className="input-error">{errors.name.message}</span>
          )}
          <input
            className="input"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: { value: emailRegex, message: "Email is invalid" },
            })}
          />
          {errors.email && (
            <span className="input-error">{errors.email.message}</span>
          )}
          <input
            className="input"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          {errors.password && (
            <span className="input-error">{errors.password.message}</span>
          )}
          <button type="submit" className="button">
            <h4>Register</h4>
          </button>
          {errorCode && (
            <span className="error-message">{RegisterErrorMap[errorCode]}</span>
          )}
        </form>
      )}
    </Card>
  );
};
