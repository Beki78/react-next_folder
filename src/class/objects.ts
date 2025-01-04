import { SingleFolder } from "../libs/single_folder";

const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <></>;\n};\n\nexport default App;\n`;

export const folderPagesJs = new SingleFolder({
  mainDir: "src",
  dirName: "pages",
  fileName: "default.jsx",
  fileContent,
});
export const folderPagesTs = new SingleFolder({
  mainDir: "src",
  dirName: "pages",
  fileName: "default.tsx",
  fileContent,
});

export const folderCompJs = new SingleFolder({
  mainDir: "src",
  dirName: "components",
  fileName: "default.jsx",
  fileContent,
});
export const folderCompTs = new SingleFolder({
  mainDir: "src",
  dirName: "components",
  fileName: "default.tsx",
  fileContent,
});

export const folderTs = new SingleFolder({
  mainDir: "src",
  dirName: "types",
  fileName: "types.ts",
  fileContent: ``,
});

export const folderHookJs = new SingleFolder({
  mainDir: "src",
  dirName: "hook",
  fileName: "hook.js",
  fileContent: ``,
});
export const folderHookTs = new SingleFolder({
  mainDir: "src",
  dirName: "hook",
  fileName: "hook.ts",
  fileContent: ``,
});

export const folderLibJs = new SingleFolder({
  mainDir: "src",
  dirName: "lib",
  fileName: "lib.js",
  fileContent: ``,
});
export const folderLibTs = new SingleFolder({
  mainDir: "src",
  dirName: "lib",
  fileName: "lib.ts",
  fileContent: ``,
});

export const folderUtilsJs = new SingleFolder({
  mainDir: "src",
  dirName: "utils",
  fileName: "util.js",
  fileContent: ``,
});
export const folderUtilsTs = new SingleFolder({
  mainDir: "src",
  dirName: "utils",
  fileName: "util.ts",
  fileContent: ``,
});
export const folderApiJs = new SingleFolder({
  mainDir: "src",
  dirName: "api",
  fileName: "api.js",
  fileContent: `const API_URL = 'https://api.example.com'; // Replace with your actual API URL

// Function to fetch data from the API
const fetchHelloWorld = async () => {
  try {
     const response = await fetch(API_URL + '/hello');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data: ' + error);
  }
};

module.exports = { fetchHelloWorld };`,
});
export const folderApiTs = new SingleFolder({
  mainDir: "src",
  dirName: "api",
  fileName: "api.ts",
  fileContent: `const API_URL = 'https://api.example.com'; // Replace with your actual API URL

// Define a type for the response data
interface ApiResponse {
  message: string;
}

// Function to fetch data from the API
export const fetchHelloWorld = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL + '/hello');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data: ' + error);
  }
};`,
});

export const folderAuthJs = new SingleFolder({
  mainDir: "src",
  dirName: "auth",
  fileName: "auth.js",
  fileContent: `// auth.js

const API_URL = 'http://localhost:3000/api'; // Replace with your backend API URL

export const register = async (username, password) => {
    try {
        const response = await fetch(API_URL + '/register', { // Using + for concatenation
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(API_URL + '/login', { // Using + for concatenation
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token in local storage
        console.log('Login successful:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    console.log('Logged out successfully');
};

export const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    // Optionally decode the token to get user info
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
};`,
});
export const folderAuthTs = new SingleFolder({
  mainDir: "src",
  dirName: "auth",
  fileName: "auth.ts",
  fileContent: `// auth.ts

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
`,
});

export const folderContextTs = new SingleFolder({
  mainDir: "src",
  dirName: "context",
  fileName: "MyContext.tsx",
  fileContent: `// FeatureFlagContext.tsx

import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define feature flags type
interface FeatureFlags {
    newCheckout: boolean;
    betaAnalytics: boolean;
}

// Create a default feature flags object
const defaultFlags: FeatureFlags = {
    newCheckout: false,
    betaAnalytics: false,
};

// Create context
const FeatureFlagContext = createContext<{
    flags: FeatureFlags;
    setFlags: React.Dispatch<React.SetStateAction<FeatureFlags>>;
}>({
    flags: defaultFlags,
    setFlags: () => {},
});

// Provider component
export const FeatureFlagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [flags, setFlags] = useState<FeatureFlags>(defaultFlags);

    return (
        <FeatureFlagContext.Provider value={{ flags, setFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

// Custom hook to use feature flags
export const useFeatureFlags = () => {
    return useContext(FeatureFlagContext);
};`,
});
export const folderContextJs = new SingleFolder({
  mainDir: "src",
  dirName: "context",
  fileName: "MyContext.jsx",
  fileContent: `// FeatureFlagContext.js

import React, { createContext, useContext, useState } from 'react';

// Create default feature flags object
const defaultFlags = {
    newCheckout: false,
    betaAnalytics: false,
};

// Create context
const FeatureFlagContext = createContext({
    flags: defaultFlags,
    setFlags: () => {},
});

// Provider component
export const FeatureFlagProvider = ({ children }) => {
    const [flags, setFlags] = useState(defaultFlags);

    return (
        <FeatureFlagContext.Provider value={{ flags, setFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

// Custom hook to use feature flags
export const useFeatureFlags = () => {
    return useContext(FeatureFlagContext);
};`,
});

export const folderStoreJs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.js",
  fileContent: `// useStore.js

import create from 'zustand';

// Define the store
const useStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;`,
});
export const folderStoreTs = new SingleFolder({
  mainDir: "src",
  dirName: "store",
  fileName: "store.ts",
  fileContent: `// useStore.ts

import create from 'zustand';

interface StoreState {
    count: number;
    increase: () => void;
    decrease: () => void;
}

// Define the store
const useStore = create<StoreState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;`,
});
