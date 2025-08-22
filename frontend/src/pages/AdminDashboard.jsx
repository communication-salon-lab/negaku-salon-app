import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import apiClient from '../api/axios'; // 認証ヘッダー付きのaxiosインスタンス

const AdminDashboard = () => {
    const navigate = useNavigate(); 
    
    const handleLogout = () => {
    // ローカルストレージからトークンを削除
    localStorage.removeItem('authToken');
    // ログインページへリダイレクト（ページを再読み込み）
    window.location.href = '/login';
    };

    const [articles, setArticles] = useState([]);

    // 記事一覧を取得する関数
    const fetchArticles = async () => {
    try {
        const response = await apiClient.get('/articles');
        setArticles(response.data);
    } catch (error) {
        console.error("記事の読み込みに失敗", error);
    }
    };

    // 削除ボタンが押されたときの処理
    const handleDelete = async (id) => {
    if (window.confirm('本当にこの記事を削除しますか？')) {
        try {
        await apiClient.delete(`/articles/${id}`);
        // 削除成功後、記事一覧を再読み込み
        fetchArticles(); 
        } catch (error) {
        console.error("記事の削除に失敗", error);
        alert("削除に失敗しました。");
        }
    }
    };

    // 初期表示時に記事を読み込む
    useEffect(() => {
    fetchArticles();
    }, []);


    return (
    <div>
        <h1>管理者ダッシュボード</h1>
        <p>ようこそ！ログインに成功しました。</p>

        <button 
        onClick={() => navigate('/admin/articles/new')} 
        style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}
        >
        新規記事を作成
        </button>

        <h2>記事一覧</h2>
        <ul>
        {articles.map(article => (
            <li key={article.id}>
            {article.title}
            <button 
                onClick={() => navigate(`/admin/articles/${article.id}/edit`)} 
                style={{ marginLeft: '10px' }}
            >
                編集
            </button>
            <button onClick={() => handleDelete(article.id)} style={{ marginLeft: '10px' }}>
                削除
            </button>
            </li>
        ))}
        </ul>
        <button onClick={handleLogout}>ログアウト</button>
    </div>
    );
};

export default AdminDashboard;