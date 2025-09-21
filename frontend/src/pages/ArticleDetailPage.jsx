import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import apiClient from '../api/axios';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const ArticleDetailPage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await apiClient.get(`/articles/${id}`)
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

  // 日付のフォーマットを統一
  const formattedEventDate = article.event_date 
    ? format(new Date(article.event_date), 'yyyy年M月d日 (E)', { locale: ja }) 
    : '';
  const formattedCreatedAt = format(new Date(article.created_at), 'yyyy年M月d日', { locale: ja });


  return (
    <div className="bg-Beige min-h-screen pt-24 md:pt-28 pb-12">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-full max-w-4xl mx-auto p-6 md:p-10 text-lg">
        <div className="prose lg:prose-xl max-w-none">
          
          {article.category && (
            <span className="badge badge-info">{article.category}</span>
          )}

          <h1 className="text-GreenDark text-3xl md:text-4xl font-bold border-b pb-4 mb-6 p-5">
            {article.title}
          </h1>
          
          <div className="text-gray-500 text-base border-b pb-4 mb-6">
            <p className="my-1">投稿日: {formattedCreatedAt}</p>
            {formattedEventDate && <p className="my-1">開催日: {formattedEventDate}</p>}
          </div>
          
          <div className="whitespace-pre-wrap">
            {article.content}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-ghost text-Olive hover:bg-white hover:bg-opacity-20"
        >
          ← 一覧に戻る
        </button>
      </div>

    </div>
  );
};

export default ArticleDetailPage;