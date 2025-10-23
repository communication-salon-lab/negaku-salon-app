import React from "react";
import { Link } from 'react-router-dom';
import PeopleCount from "./PeopleCount";
import ArticleList from '../components/ArticleList';
import Nagesen from '../components/Nagesen';
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">お知らせ</h2>
            <div className="card bg-white shadow-xl w-[80%]">
              <div className="card-body relative">
                {/* 固定のお知らせ */}
                <div className="mb-6">
                  <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
                    <li>10月10日(金) 4〜5限　山下プロジェクト ボードゲーム試遊会</li>
                    <li>10月29日(水) 3〜4限　野球観戦イベント 〜ドジャース vs ブルージェイズ戦〜</li>
                  </ul>
                </div>
                {/* 記事の一覧 */}
                <ArticleList limit={5} />

                <Link to="/articles" className="btn bg-Olive border-Olive text-white hover:bg-GreenDark absolute bottom-0 right-0">
                  一覧へ ＞
                </Link>
              </div>
            </div>
        </div>
        <PeopleCount />

        <TrendChart rangeHours={1} />
        <div className="flex flex-col justify-center items-center">
        <Nagesen />
        </div>

        {/* Googleカレンダー */}
        <div className="bg-Beige p-5 lg:p-10 animate-fade-in-bottom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">イベントカレンダー</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=bmVnYWt1c2Fsb24yMDI0QGdtYWlsLmNvbQ&color=%23039be5"
              style={{ border: 0 }}
              className="w-full h-[300px] md:h-[550px] lg:h-[750px]"
              title="Calendar"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
