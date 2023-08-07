import { clearAuthToken } from "../common/utils/clearAuthToken";
import { setAuthToken } from "../common/utils/setAuthToken";

export const login =
  (
    setLoggedInStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ) =>
  async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3010/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const { token, email: userEmail } = (await response.json()) as {
        token: string;
        email: string;
      };

      setAuthToken(token);
      setLoggedInStatus(true);
      setEmail(userEmail);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

export const register =
  (
    setLoggedInStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ) =>
  async (name: string, email: string, password: string): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3010/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const { token, email: userEmail } = (await response.json()) as {
        token: string;
        email: string;
      };

      setAuthToken(token);

      setLoggedInStatus(true);
      setEmail(userEmail);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

export const logout =
  (
    setLoggedInStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) =>
  () => {
    setLoggedInStatus(false);
    setName("");
    clearAuthToken();
  };
