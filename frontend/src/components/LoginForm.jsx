import React, { useState } from 'react';
import apiClient from '../api/axios'; 
import { useNavigate } from 'react-router-dom'; // 画面遷移のためのフック

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigateフックを呼び出す

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Rails APIへログイン情報を送信
      const response = await apiClient.post('/login', {
        name,
        password,
      });

      // トークンを保存
      localStorage.setItem('authToken', response.data.token);

      // ★★★ ここが重要！ ★★★
      // ログイン成功後、'/dashboard' へ画面を遷移させる
      navigate('/dashboard');

    } catch (err) {
      setError('ログインに失敗しました。');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>メールアドレス:</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
};

export default LoginForm;