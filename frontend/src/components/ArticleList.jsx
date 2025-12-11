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

// 手動で追加するお知らせデータ
const staticArticles = [
  {
    id: 'static-7',
    title: '小田切先生　ものづくりイベント（地域の学童対象）',
    content: '15:30-16:30',
    category: 'イベント',
    created_at: '2025-12-17T15:30:00'
  },
  {
    id: 'static-6',
    title: '映画イベント（HOME ALONE）',
    content: '',
    category: 'シネマ',
    created_at: '2025-12-17T00:00:00'
  },
  {
    id: 'static-5',
    title: 'プロジェクト最終発表会、オープンラボ:10号館、オープンサロン:サロン1＋２',
    content: '',
    category: 'イベント',
    created_at: '2025-12-13T00:00:00'
  },
  {
    id: 'static-4',
    title: '飯塚先生による、卒業生相談会',
    content: '５限',
    category: '相談会',
    created_at: '2025-12-12T16:20:00'
  },
  {
    id: 'static-3',
    title: 'プロジェクト情報交換会',
    content: '３限',
    category: 'イベント',
    created_at: '2025-12-05T13:00:00'
  },
  {
    id: 'static-2',
    title: '映画イベント（クレヨンしんちゃん逆襲のロボとーちゃん）',
    content: '15:30-17:30',
    category: 'シネマ',
    created_at: '2025-11-28T15:30:00'
  },
  {
    id: 'static-1',
    title: 'wiiイベント＋もっこりカフェ２',
    content: '12:30-14:30',
    category: 'イベント',
    created_at: '2025-11-28T12:30:00'
  },
];


// コンポーネント名を ArticleList に変更
const ArticleList = ({ limit }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get('/articles');
        // APIデータと固定データを結合してソート
        const combinedArticles = [...response.data, ...staticArticles];
        const sortedArticles = combinedArticles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setArticles(sortedArticles);
      } catch (error) {
        console.error("記事の読み込みに失敗しました", error);
        // エラー時は固定データのみを表示
        const sortedStatic = staticArticles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setArticles(sortedStatic);
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
    <div className="space-y-4 p-2">
      {displayArticles.map((article, index) => (
        <div 
          key={article.id} 
          className="group relative bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-Olive/30"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* 左側のアクセントライン */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-Olive to-GreenDark transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* 日付とカテゴリのセクション */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:min-w-[280px]">
                {/* 日付 */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-Olive rounded-full"></div>
                  <time className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {format(new Date(article.created_at), 'yyyy.MM.dd', { locale: ja })}
                  </time>
                </div>
                
                {/* カテゴリ */}
                <div className={`badge badge-outline ${categoryBadgeMap[article.category] || 'badge-ghost'} shadow-sm`}>
                  {article.category}
                </div>
              </div>
              
              {/* タイトルと内容セクション */}
              <div className="flex-1">
                <Link 
                  to={`/articles/${article.id}`}
                  className="block group-hover:text-GreenDark transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-GreenDark">
                    {article.title}
                  </h3>
                  {article.content && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.content}
                    </p>
                  )}
                </Link>
              </div>
              
              {/* 右側の矢印アイコン */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-Olive group-hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* ホバー時のグラデーション効果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        </div>
      ))}
    </div>
  );
};


export default ArticleList;