import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';
import CategoryBadge from '../components/CategoryBadge';

const ArticleDetailPage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevArticleId, setPrevArticleId] = useState(null);
  const [nextArticleId, setNextArticleId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await apiClient.get(`/articles/${id}`);
        setArticle(response.data);
        
        // 前後の記事IDを取得（APIエンドポイントに応じて調整が必要）
        const allArticlesResponse = await apiClient.get('/articles');
        const articles = allArticlesResponse.data;
        const currentIndex = articles.findIndex(a => a.id === parseInt(id));
        
        if (currentIndex > 0) {
          setNextArticleId(articles[currentIndex - 1].id);
        }
        if (currentIndex < articles.length - 1) {
          setPrevArticleId(articles[currentIndex + 1].id);
        }
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
    <div className ="bg-Beige flow-root">
        <div className ="bg-Olive h-20 md:h-60 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold tracking-widest">お知らせ</h1>
        </div>
        <div className="bg-white m-16 p-5 md:p-10 mx-auto w-[80%] md:w-[60%] h-[400px] md:h-[1000px] flex-grow relative overflow-hidden">
          <div className="border-b-4 border-Olive ">
            <h1 className="text-lg md:text-2xl lg:text-4xl md:pb-3">
              {article.title}
              <span className="inline-block align-middle relative -top-[3px] lg:-top-[7px] ml-2">
                <CategoryBadge category={article.category} />
              </span>
            </h1>
          </div>
          <p className="mb-7 text-gray-500 text-xs md:text-base">作成日: {new Date(article.created_at).toLocaleDateString()}</p>
          <div className="whitespace-pre-wrap text-gray-800 text-xs md:text-base">
            {article.content}
          </div>
          <img 
            src="/logo.png"
            alt="" 
            className="absolute bottom-0 right-0 w-32 md:w-48 opacity-20 pointer-events-none z-0" 
        />
        </div>
        
        {/* ナビゲーションボタン */}
        <div className="mx-auto w-[80%] md:w-[60%] mb-16 flex justify-between items-center gap-4">
          <button
            onClick={() => navigate('/articles')}
            className="px-6 py-3 bg-Olive text-white rounded hover:bg-opacity-80 transition"
          >
            一覧に戻る
          </button>
          
          <div className="flex gap-4">
            {prevArticleId && (
              <button
                onClick={() => navigate(`/articles/${prevArticleId}`)}
                className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-opacity-80 transition"
              >
                ← 前の記事
              </button>
            )}
            {nextArticleId && (
              <button
                onClick={() => navigate(`/articles/${nextArticleId}`)}
                className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-opacity-80 transition"
              >
                次の記事 →
              </button>
            )}
          </div>
        </div>
    </div>
  );
};

export default ArticleDetailPage;
