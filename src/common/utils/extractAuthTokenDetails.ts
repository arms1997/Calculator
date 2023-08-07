import jwtDecode from "jwt-decode";

export const extractAuthTokenDetails = (
  token: string
): {
  email: string;
  isValid: boolean;
} => {
  const decoded = jwtDecode(token) as { email: string; exp: number };

  return {
    email: decoded.email,
    isValid: decoded.exp > Date.now() / 1000,
  };
};
