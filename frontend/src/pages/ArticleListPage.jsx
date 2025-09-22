import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    return (
        <div className="bg-Beige min-h-screen pt-24 pb-12">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-GreenDark mb-8">
          お知らせ一覧
        </h2>
        
        {/* ★ 白いカードのdivを削除し、ArticleListを直接配置 */}
        <ArticleList />
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

export default ArticleListPage;