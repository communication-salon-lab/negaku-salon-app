import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/axios';
import axios from 'axios';

// コンポーネント名を ArticleList に変更
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get('/articles');
        setArticles(response.data);
      } catch (error) {
        console.error("記事の読み込みに失敗しました", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div>
      <h1>イベント一覧</h1>
      {articles.map(article => (
        <div key={article.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
          <h2>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </h2>
          <p>作成日: {new Date(article.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};


export default ArticleList;