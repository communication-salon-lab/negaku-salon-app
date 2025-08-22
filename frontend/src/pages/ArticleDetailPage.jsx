import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetailPage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // URLから記事のIDを取得

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/v1/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("記事の読み込みに失敗しました", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <p>読み込み中...</p>;
  if (!article) return <p>記事が見つかりません。</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>作成日: {new Date(article.created_at).toLocaleDateString()}</p>
      {/* Railsのtext型は改行が\nなので、CSSで整形する */}
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetailPage;