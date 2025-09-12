import axios from 'axios';

// axiosのインスタンスを作成
const apiBase = (process.env.REACT_APP_API_URL || '').replace(/\/+$/, '');
const apiPrefix = '/api/v1';

const apiClient = axios.create({
  baseURL: `${apiBase}${apiPrefix}`,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiClient;