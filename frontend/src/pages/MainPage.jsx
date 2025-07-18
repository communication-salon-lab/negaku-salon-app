import React from "react";
import PeopleCount from "./PeopleCount";
import { Helmet } from "react-helmet-async";

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
        <div className="bg-Beige p-5 mb-10 lg:p-10 mt-3 lg:mt-15 text-base md:text-xl lg:text-xl animate-fade-in-bottom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">お知らせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">イベント情報</h3>
                <p>5月20日 ボードゲームの日</p>
                <p>5月29日 入門プログラミング相談会</p>
                <p>6月6日 映画上映会（コナン）</p>
                <p>6月13日 映画上映会（LA LA LAND）</p>
                <p>6月30日 ~ 7月4日 カウンター（相談会）</p>
                <p>7月4日 プロジェクト交流会</p>
              </div>
            </div>
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">混雑状況</h3>
                {/* <p>現在の混雑状況は「普通」です。</p> */}
                <PeopleCount />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {/* 1枚目 */}
            <div className="p-4">
              <img
                src="/nagesen.png"
                alt="さろまる"
                className="w-full h-auto object-contain"
              />
            </div>
          {/* 2枚目 */}
            <div className="p-4">
              <img
                src="/price2.png"
                alt="投げ銭の記録"
                className="w-full h-auto object-contain"
              />
            </div>
          {/* 3枚目 */}
            <div className="p-4">
              <img
                src="/price1.png"
                alt="投げ銭_2024"
                className="w-full h-auto object-contain"
              />
            </div>
        </div>

        {/* Googleカレンダー */}
        <div className="bg-Beige p-5 lg:p-10 animate-fade-in-bottom">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">イベントカレンダー</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=negakusalon2024%40gmail.com&ctz=UTC"
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
