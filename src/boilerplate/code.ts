export const fileContent = `import React from 'react';\n\nconst App = () => {\n  return <></>;\n};\n\nexport default App;\n`;

export const apiJs = `const API_URL = 'https://api.example.com'; // Replace with your actual API URL

// Function to fetch data from the API
export const fetchHelloWorld = async () => {
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
`

export const apiTs = `const API_URL = 'https://api.example.com'; // Replace with your actual API URL

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
};`

export const authJs = `// auth.js

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
};`

export const authTs = `// auth.ts

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
`

export const contextTs = `// FeatureFlagContext.tsx

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
};`

export const contextJs = `// FeatureFlagContext.js

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
};`

export const zustandJs = `// useStore.js

import create from 'zustand';

// Define the store
const useStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;`

export const zustandTs = `// useStore.ts

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

export default useStore;`

export const storeJs = `import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
`;

export const sliceJs = `import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const genericSlice = createSlice({
  name: 'generic',
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
    },
    requestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    requestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { requestStart, requestSuccess, requestFailure } =
  genericSlice.actions;
export default genericSlice.reducer;
`;

export const sagaJs = `import { takeEvery, call, put } from 'redux-saga/effects';
import { requestStart, requestSuccess, requestFailure } from './slice';

// Mock API call
const fetchData = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => resolve({ data: 'Sample Data' }), 1000)
  );
};

function* handleRequest() {
  try {
    const response = yield call(fetchData);
    yield put(requestSuccess(response.data));
  } catch (error) {
    yield put(requestFailure(error.message));
  }
}

export function* watchGenericSaga() {
  yield takeEvery(requestStart.type, handleRequest);
}
`;

export const storeTs = `import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
`;

export const sliceTs = `import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenericState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: GenericState = {
  data: null,
  loading: false,
  error: null,
};

const genericSlice = createSlice({
  name: 'generic',
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
    },
    requestSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    requestFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { requestStart, requestSuccess, requestFailure } =
  genericSlice.actions;
export default genericSlice.reducer;
`;

export const sagaTs = `import { takeEvery, call, put } from 'redux-saga/effects';
import { requestStart, requestSuccess, requestFailure } from './slice';

// Mock API call
const fetchData = async (): Promise<any> => {
  return await new Promise((resolve) =>
    setTimeout(() => resolve({ data: 'Sample Data' }), 1000)
  );
};

function* handleRequest(): Generator<any, void, any> {
  try {
    const response = yield call(fetchData);
    yield put(requestSuccess(response.data));
  } catch (error: any) {
    yield put(requestFailure(error.message));
  }
}

export function* watchGenericSaga() {
  yield takeEvery(requestStart.type, handleRequest);
}
`;