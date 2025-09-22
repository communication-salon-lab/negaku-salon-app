import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/axios';
import axios from 'axios';

import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

// カテゴリ名に対応するバッジのCSSクラスを定義
const categoryBadgeMap = {
  'イベント': 'badge-info',
  '相談会': 'badge-accent',
  'シネマ': 'badge-secondary',
};


// コンポーネント名を ArticleList に変更
const ArticleList = ({ limit }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get('/articles');
        const sortedArticles = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setArticles(sortedArticles);
      } catch (error) {
        console.error("記事の読み込みに失敗しました", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const displayArticles = limit ? articles.slice(0, limit) : articles;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img src="/nekap_ya.png" alt="読み込み中..." className="w-16 h-16" />
      </div>
    );
  }

  return (
    
    <div className="card-body">

      {/* articles.map() で各記事をレンダリング */}
      {displayArticles.map(article => (
        <div key={article.id} className="grid grid-cols-1 md:grid-cols-[150px_120px_1fr] items-center gap-x-4 gap-y-2 py-3 border-b  border-gray-200 transition duration-300 hover:bg-white/30  hover:shadow-md">
          
          {/* 日付 */}
          <div className="text-gray-600">
            {format(new Date(article.created_at), 'yyyy.MM.dd', { locale: ja })}
          </div>
          
          {/* カテゴリ (バッジ) */}
          <div>
            <div className={`badge badge-outline ${categoryBadgeMap[article.category] || 'badge-ghost'}`}>
              {article.category}
            </div>
          </div>
          
          {/* タイトル (詳細ページへのリンク) */}
          <div className="font-semibold text-GreenDark hover:underline">
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </div>
        </div>
      ))}

    </div>
  );
};


export default ArticleList;