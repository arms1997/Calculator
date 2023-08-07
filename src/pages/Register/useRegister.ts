import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, registerAction } = useAuth();
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);
    setErrorCode(null);

    try {
      await registerAction?.(data.name, data.email, data.password);
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
