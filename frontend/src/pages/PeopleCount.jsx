import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

const congestionImages = {
  level1: '/konzatu1.png', // 2人以下の場合の画像
  level2: '/konzatu2.png', // 3〜4人の場合の画像
  level3: '/konzatu3.png', // 5人以上の場合の画像
};

const PeopleCount = () => {
  const now = new Date();
  const day = now.getDay(); // 0は日曜日
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 21; // 平日の9時から21時のフラグ

  const [peopleCount, setPeopleCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  const fetchPeopleCount = async () => {
    try {
      const response = await fetch(
        "https://amvfd3xhzi.execute-api.ap-northeast-1.amazonaws.com/dev"
      );
      if (!response.ok) {
        throw new Error("エラー:ネットワーク応答が不正です");
      }
      const data = await response.json();
      // API Gateway の設定により、data.body が存在する場合と存在しない場合があるので対応
      let payload;
      if (data.body) {
        // Lambda のレスポンス形式が { statusCode, headers, body } の場合
        payload = JSON.parse(data.body);
      } else {
        // 直接 flat な JSON オブジェクトが返される場合
        payload = data;
      }
      setPeopleCount(payload.count);
      setLastUpdated(payload.timestamp); 
    } catch (err) {
      console.error("人数の取得に失敗しています:", err);
      setError(err);
    }
  };

  useEffect(() => {
    //if (!isOpen) return; // 営業時間外は何もしない
    // 人数を取得
    fetchPeopleCount();
    // 3分ごとに最新データを更新
    const timer = setInterval(fetchPeopleCount, 180000);
    return () => clearInterval(timer);
  }, [isOpen]);

  // if (!isOpen) {
  //   return <p>営業時間外</p>;
  // }

  const getImageForCount = (count) => {
    if (count <= 2) {
      return congestionImages.level1;
    } else if (count <= 4) {
      return congestionImages.level2;
    } else {
      return congestionImages.level3;
    }
  };

  const formattedTimestamp = lastUpdated
    ? format(new Date(lastUpdated), 'yyyy/MM/dd (E) HH:mm', { locale: ja })
    : "時刻を取得中...";

  return (
    <div>
      {error ? (
        <p className="text-red-500">現在メンテナンス中です..</p>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <h3 className="card-title text-red-600 text-lg md:text-xl lg:text-2xl">現在の混雑状況</h3>
            <p className="text-gray-600 mt-2">{formattedTimestamp}現在</p>
            <img
              src="/konzatu.png"
              alt="混雑画像"
              className="w-[70vw] md:w-[70vw]"
            />
            <div className="bg-white w-1/4 m-10">
              <h3 className="text-white bg-Olive text-lg md:text-xl lg:text-2xl text-center p-2">コミュニケーションサロン１</h3>
              {/* <p>現在の混雑状況は「普通」です。</p> */}
              <div className="flex justify-center">
                <img 
                  src={getImageForCount(peopleCount)} 
                  alt="混雑状況" 
                  className="w-[20vw]" // 画像サイズを調整
                />
              </div>
            </div>
          </div>
          
          {/* <p>サロン1は、現在 {peopleCount} 人</p> */}
        </>
        
      )}
    </div>
  );
};

export default PeopleCount;