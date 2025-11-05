import React from "react";
import { Link } from 'react-router-dom';
import PeopleCount from "./PeopleCount";
import ArticleList from '../components/ArticleList';
import Nagesen from '../components/Nagesen';
import SnsSection from '../components/SnsSection';
import { Helmet } from "react-helmet-async";
import TrendChart from './/TrendChart';

const MainPage = () => {
  return (
    <>
      <div className="bg-Beige font-sans">
        <Helmet>
          <title>コミュニケーションサロンラボ｜サロンについて | 専修大学 ネットワーク情報学部</title>
          <meta
            name="description"
            content="専修大学ネットワーク情報学部コミュニケーションサロンラボの紹介ページ。"
          />
          <link rel="canonical" href="https://communication-salon.com/about" />
          <meta property="og:title" content="コミュニケーションサロンラボ｜サロンについて" />
          <meta
            property="og:description"
            content="学生・教員・卒業生が自由に集まれる居場所作りラボ。"
          />
          <meta property="og:url" content="https://communication-salon.com/about" />
          <meta property="og:image" content="https://communication-salon.com/og-image-about.png" />
        </Helmet>
        <div className="relative w-full h-screen animate-fade-in-fwd">
          {/* 背景画像 */}
          <img
            src="/salon3.jpg"
            alt="サロン風景"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* ベージュのオーバーレイ */}
          <div className="absolute inset-0 bg-Beige opacity-30 z-10"></div>

          <div className="absolute top-1/4 z-30">
            {/* 右斜め上テキスト */}
            <h1 className="text-5xl ml-5 md:text-7xl md:ml-5 lg:text-8xl lg:ml-12 text-white font-klee mb-8 animate-tracking-in-expand">
              未来をつくる、
            </h1>
            {/* 右斜め下テキスト */}
            <h1 className="text-5xl ml-12 md:text-7xl lg:text-8xl lg:ml-20 lg:pl-20 text-white font-klee animate-tracking-in-expand">
              つながる場所
            </h1>
          </div>

          {/* グラデーションで境界線を曖昧に */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradation z-20"></div>
        </div>

        {/* お知らせセクション */}
        <div className="bg-Beige p-5 mb-10 lg:p-10 mt-3 lg:mt-15 text-base md:text-xl lg:text-xl animate-fade-in-bottom flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h2 className="text-responsive-xl font-bold gradient-text mb-3 animate-slide-in-left">
              お知らせ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-Olive to-GreenDark mx-auto rounded-full"></div>
          </div>
          
          <div className="card bg-white shadow-large hover-lift w-[90%] max-w-4xl relative overflow-hidden">
            {/* カードの装飾 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-Olive via-GreenDark to-Olive"></div>
            
            <div className="card-body relative p-8">
              <ArticleList limit={5} />
              
              {/* 改善されたボタン */}
              <div className="flex justify-end mt-6">
                <Link 
                  to="/articles" 
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-Olive to-GreenDark text-white px-6 py-3 rounded-xl font-medium shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 focus-ring"
                >
                  <span>一覧を見る</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* ホバー時のシマー効果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
          </div>
        </div>
        
        <PeopleCount />
        

        <TrendChart rangeHours={1} />
          
        <div className="flex flex-col justify-center items-center">
        <Nagesen />
        </div>

        {/* SNSセクション */}
        <SnsSection />

        {/* Googleカレンダー */}
        <div className="bg-Beige p-5 lg:p-10 animate-fade-in-bottom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-xl font-bold gradient-text mb-3 animate-slide-in-right">
              イベントカレンダー
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-GreenDark to-Olive mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-responsive-base">
              サロンの最新イベントをチェックしよう
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-large hover-lift bg-white p-2">
              {/* カレンダーの装飾フレーム */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-Olive via-GreenDark via-Olive to-GreenDark"></div>
              
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=bmVnYWt1c2Fsb24yMDI0QGdtYWlsLmNvbQ&color=%23039be5"
                style={{ border: 0 }}
                className="w-full h-[300px] md:h-[550px] lg:h-[750px] rounded-xl"
                title="Calendar"
              ></iframe>
              
              {/* 角の装飾 */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-Olive rounded-full animate-pulse-soft"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-GreenDark rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
