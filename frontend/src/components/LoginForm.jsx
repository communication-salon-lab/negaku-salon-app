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
    <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-2xl font-bold text-center text-GreenDark">管理者ログイン</h1>
        
        {/* ★ 3. エラーメッセージのデザイン */}
        {error && (
          <div role="alert" className="alert alert-error text-sm p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
        )}

        {/* ★ 4. daisyUIのフォームコントロールを使用 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">ユーザー名</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">パスワード</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          {/* ★ 5. ボタンのデザイン */}
          <button type="submit" className="btn bg-Olive text-white hover:bg-GreenDark">
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;