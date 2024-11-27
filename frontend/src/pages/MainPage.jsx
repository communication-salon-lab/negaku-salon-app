import React from "react";
import Header from "../components/Header"; // ヘッダーコンポーネントのインポート

const MainPage = () => {
  // const today = new Date().toLocaleDateString(); // 日付を取得

  return (
    <div>
      {/* 背景セクション */}
      <div className="relative w-full h-screen">
        {/* 背景画像 */}
        <img
          src="/salon.jpg"
          alt="サロン風景"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ヘッダー */}
        <Header />

        背景模様
        <div className="absolute inset-0">
          {/* 左上の模様 */}
          <div
            // className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#637d6e]"
            // style={{ mixBlendMode: "overlay" }}
          ></div>

          {/* 左下の模様 */}
          <div
            // className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#b2bf9f]"
            // style={{ mixBlendMode: "overlay" }}
          ></div>

          {/* 右上の模様 */}
          <div className="absolute top-10 right-10">
            <div
              // className="w-96 h-96 rounded-full bg-[#dcdac4]"
              // style={{ mixBlendMode: "overlay" }}
            ></div>
            {/* 日付表示
            <div className="absolute top-10 right-10 text-lg text-white font-bold">
              {today}
            </div> */}
          </div>

          {/* 右下の模様 */}
          <div
            // className="absolute bottom-0 right-0 w-96 h-106 rounded-full bg-[#9ba860]"
            // style={{ mixBlendMode: "overlay" }}
          ></div>
        </div>

        {/* 中央テキスト */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            未来をつくる、つながる場所
          </h1>
        </div>
      </div>

      {/* お知らせセクション */}
      <div className="bg-base-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">お知らせ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title">イベント情報</h3>
              <p>12月4日 スマブラ大会！</p>
              <p>12月14日 プロジェクト最終発表！</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title">混雑状況</h3>
              <p>現在の混雑状況は「普通」です。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Googleカレンダー */}
      <div className="bg-base-200 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Googleカレンダー</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia%2FTokyo"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default MainPage;
