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
    <div className="card w-full max-w-md shrink-0 bg-white shadow-large hover-lift border border-gray-100 relative overflow-hidden">
      {/* カードの装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-Olive to-GreenDark"></div>
      
      <form onSubmit={handleSubmit} className="card-body p-8">
        <div className="text-center mb-6">
          <h1 className="text-responsive-lg font-bold gradient-text mb-2">管理者ログイン</h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-Olive to-GreenDark mx-auto rounded-full"></div>
        </div>
        
        {/* エラーメッセージ */}
        {error && (
          <div role="alert" className="alert bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 animate-slide-in-left">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* フォームフィールド */}
        <div className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-GreenDark">ユーザー名</span>
            </label>
            <input
              type="text"
              placeholder="ユーザー名を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered border-gray-300 focus:border-Olive focus:ring-2 focus:ring-Olive/20 rounded-xl transition-all duration-300"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-GreenDark">パスワード</span>
            </label>
            <input
              type="password"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered border-gray-300 focus:border-Olive focus:ring-2 focus:ring-Olive/20 rounded-xl transition-all duration-300"
              required
            />
          </div>
        </div>
        
        <div className="form-control mt-8">
          <button 
            type="submit" 
            className="btn bg-gradient-to-r from-Olive to-GreenDark text-white border-none rounded-xl font-medium py-3 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 focus-ring"
          >
            <span>ログイン</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </form>
      
      {/* ホバー時のシマー効果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
    </div>
  );
};

export default LoginForm;