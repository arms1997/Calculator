import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isLoggedIn, loginAction } = useAuth();

  console.log(errors);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setErrorCode(null);

    try {
      await loginAction?.(data.email, data.password);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setErrorCode(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errorCode,
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
  };
};
