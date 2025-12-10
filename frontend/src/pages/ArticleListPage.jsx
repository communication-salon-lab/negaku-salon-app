import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    return (
        <>
        <Helmet>
          <title>お知らせ一覧｜コミュニケーションサロンラボ｜専修大学</title>
          <meta
            name="description"
            content="コミュニケーションサロンラボのお知らせ・イベント情報一覧。最新のサロン活動、イベント開催情報をご確認いただけます。"
          />
          <meta name="keywords" content="お知らせ,イベント情報,サロン活動,専修大学,コミュニケーションサロン" />
          <link rel="canonical" href="https://communication-salon.com/articles" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="お知らせ一覧｜コミュニケーションサロンラボ" />
          <meta property="og:description" content="最新のサロン活動、イベント開催情報をご確認いただけます" />
          <meta property="og:url" content="https://communication-salon.com/articles" />
          <meta property="og:image" content="https://communication-salon.com/salon2.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
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
    </>
    );
};

export default ArticleListPage;