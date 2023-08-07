import { FC } from "react";
import "../../common/styles/formStyles.css";
import { useLogin } from "./useLogin";
import { Card } from "../../components/Card";
import { BeatLoader } from "react-spinners";
import { LoginErrorMap } from "./LoginErrorMap";
import { emailRegex } from "../../common/utils/emailRegex";

export const Login: FC = () => {
  const { loading, errorCode, handleSubmit, register, errors } = useLogin();

  return (
    <Card>
      {loading ? (
        <BeatLoader />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
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
          <button type="submit" className="button" data-testid="login-button">
            <h4>Login</h4>
          </button>
          {errorCode && (
            <span className="error-message">{LoginErrorMap[errorCode]}</span>
          )}
        </form>
      )}
    </Card>
  );
};
