import React from "react";

const MainPage = () => {
  return (
    <div className="bg-Beige font-sans">
      <div className="relative w-full h-screen animate-fade-in-fwd">
        {/* 背景画像 */}
        <img
          src="/salon.jpg"
          alt="サロン風景"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* ベージュのオーバーレイ */}
        <div className="absolute inset-0 bg-Beige opacity-30 z-10"></div>

        <div className="absolute top-1/4 z-30">
          {/* 右斜め上テキスト */}
          <h1 className="text-5xl md:text-8xl md:ml-5 lg:text-9xl lg:ml-12 text-white font-klee mb-8 animate-tracking-in-expand">
            未来をつくる、
          </h1>
          {/* 右斜め下テキスト */}
          <h1 className="text-5xl ml-20 md:pl-10 md:text-8xl lg:text-9xl lg:ml-20 lg:pl-20 text-white font-klee animate-tracking-in-expand">
            つながる場所
          </h1>
        </div>

        {/* グラデーションで境界線を曖昧に */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradation z-20"></div>
      </div>

      {/* お知らせセクション */}
      <div className="bg-Beige p-5 lg:p-10 mt-3 lg:mt-15 text-base md:text-xl lg:text-xl animate-fade-in-bottom">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">お知らせ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">イベント情報</h3>
              <p>12月4日 スマブラ大会！</p>
              <p>12月14日 プロジェクト最終発表！</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">混雑状況</h3>
              <p>現在の混雑状況は「普通」です。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Googleカレンダー */}
      <div className="bg-Beige p-5 lg:p-10 animate-fade-in-bottom">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-GreenDark mb-6">イベントカレンダー</h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia%2FTokyo"
            style={{ border: 0 }}
            className="w-full h-[300px] md:h-[550px] lg:h-[750px]"
            title="Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
