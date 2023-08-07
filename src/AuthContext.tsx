import { FC, createContext, useContext, useEffect, useState } from "react";
import { WithChildren } from "./common/utils/WithChildren";
import { getAuthToken } from "./common/utils/getAuthToken";
import { login, logout, register } from "./actions/authActions";
import { extractAuthTokenDetails } from "./common/utils/extractAuthTokenDetails";
import { clearAuthToken } from "./common/utils/clearAuthToken";

interface AuthContextType {
  isLoggedIn: boolean;
  email: string;
  loginAction: ((email: string, password: string) => Promise<void>) | null;
  registerAction:
    | ((name: string, email: string, password: string) => Promise<void>)
    | null;
  logoutAction: (() => void) | null;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  email: "",
  loginAction: null,
  registerAction: null,
  logoutAction: null,
});

export const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const authToken = getAuthToken();

  useEffect(() => {
    if (authToken) {
      const { email, isValid } = extractAuthTokenDetails(authToken);

      if (isValid) {
        setIsLoggedIn(true);
        setEmail(email);
        return;
      }
    }

    clearAuthToken();
    setIsLoggedIn(false);
  }, [authToken]);

  const loginAction = login(setIsLoggedIn, setEmail);
  const registerAction = register(setIsLoggedIn, setEmail);
  const logoutAction = logout(setIsLoggedIn, setEmail);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, email, loginAction, registerAction, logoutAction }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
