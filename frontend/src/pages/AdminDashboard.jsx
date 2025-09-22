import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import apiClient from '../api/axios'; // 認証ヘッダー付きのaxiosインスタンス
import axios from 'axios';
import { format } from 'date-fns'; // 日付フォーマットのためにインポート


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
        <div className="bg-gray-100 min-h-screen pt-24 pb-12">
            <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
                {/* ★ 2. ヘッダーセクション */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">管理者ダッシュボード</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/admin/articles/new')}
                            className="btn bg-Olive text-white hover:bg-GreenDark"
                        >
                            新規記事を作成
                        </button>
                        <button
                            onClick={handleLogout}
                            className="btn btn-ghost"
                        >
                            ログアウト
                        </button>
                    </div>
                </div>

                {/* ★ 3. 記事一覧テーブル */}
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="table w-full">
                        {/* テーブルヘッダー */}
                        <thead>
                            <tr>
                                <th>タイトル</th>
                                <th>カテゴリ</th>
                                <th>投稿日</th>
                                <th className="text-right">操作</th>
                            </tr>
                        </thead>
                        {/* テーブルボディ */}
                        <tbody>
                            {articles.map(article => (
                                <tr key={article.id} className="hover">
                                    <td className="font-bold">{article.title}</td>
                                    <td><div className="badge badge-ghost">{article.category}</div></td>
                                    <td>{format(new Date(article.created_at), 'yyyy/MM/dd HH:mm')}</td>
                                    <td className="text-right">
                                        <div className="flex gap-2 justify-end">
                                            <button
                                                onClick={() => navigate(`/admin/articles/${article.id}/edit`)}
                                                className="btn btn-ghost btn-sm"
                                            >
                                                編集
                                            </button>
                                            <button
                                                onClick={() => handleDelete(article.id)}
                                                className="btn btn-error btn-sm text-white"
                                            >
                                                削除
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;