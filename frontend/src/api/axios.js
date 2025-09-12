import axios from 'axios';

// axiosのインスタンスを作成
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Rails APIのベースURLをここに設定
  headers: {
    'Content-Type': 'application/json',
  },
});

// リクエストインターセプター（リクエストが送信される前の共通処理）
apiClient.interceptors.request.use(
  (config) => {
    // ローカルストレージから認証トークンを取得
    const token = localStorage.getItem('authToken');
    
    // トークンがあれば、リクエストヘッダーにAuthorizationを追加
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // リクエストエラーの処理
    return Promise.reject(error);
  }
);

export default apiClient;
