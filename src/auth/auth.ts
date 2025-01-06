// auth.ts

const API_URL = "http://localhost:3000/api"; // Replace with your backend API URL

interface RegisterResponse {
  message: string;
}

interface LoginResponse {
  token: string;
}

export const register = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    const response = await fetch(API_URL + "/register", {
      // Using + for concatenation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data: RegisterResponse = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const login = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    const response = await fetch(API_URL + "/login", {
      // Using + for concatenation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data: LoginResponse = await response.json();
    localStorage.setItem("token", data.token); // Save token in local storage
    console.log("Login successful:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const logout = (): void => {
  localStorage.removeItem("token"); // Remove token on logout
  console.log("Logged out successfully");
};

export const getCurrentUser = (): any => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  // Optionally decode the token to get user info
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload;
};
