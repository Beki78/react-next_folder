import fs from "fs";
import path from "path";

export const createJsApiFile = () => {
  const folderPath = path.join(process.cwd(), "src", "api");
  const filePath = path.join(folderPath, "default.ts");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = `// src/templates/apiTemplate.js

import axios from 'axios';

const api = axios.create({
  baseURL: '{{BASE_URL}}', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer {{TOKEN}}', // Add your token logic
  },
});

export const getData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export default api;
`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export const createTsApiFile = () => {
  const folderPath = path.join(process.cwd(), "src", "api");
  const filePath = path.join(folderPath, "default.ts");

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const fileContent = `// src/templates/apiTemplate.ts

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: '{{BASE_URL}}', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer {{TOKEN}}', // Add your token logic
  },
});

export const getData = async (endpoint: string, params = {}): Promise<any> => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export default api;
`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
