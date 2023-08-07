import { getAuthToken } from "../common/utils/getAuthToken";

export interface SessionResponse {
  id: number;
  calculation: string;
  created_at: Date;
}

export const getSessions = async (): Promise<SessionResponse[] | undefined> => {
  try {
    const response = await fetch("http://localhost:3010/session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createSession = async (calculation: string): Promise<void> => {
  try {
    await fetch("http://localhost:3010/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${getAuthToken()}`,
      },
      body: JSON.stringify({ calculation }),
    });
  } catch (err) {
    console.error(err);
  }
};
