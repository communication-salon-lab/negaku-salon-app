import React, { useState, useEffect} from "react";

const PeopleCount = () => {
  const now = new Date();
  const day = now.getDate(); // 0は日曜日
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 21; // 平日の9時から21時のフラグ

  if (!isOpen) {
    return <p>営業時間外</p>
  }


  const [peopleCount, setPeopleCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchPeopleCount = async () => {
    try {
      const response = await fetch("https://amvfd3xhzi.execute-api.ap-northeast-1.amazonaws.com/dev");
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
    } catch (err) {
      console.error("人数の取得に失敗しています:", err);
      setError(err);
    }
  };

  useEffect(() => {
    // 人数を取得
    fetchPeopleCount();
    // 1分ごとに最新データを更新
    const interval = setInterval(fetchPeopleCount, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">現在メンテナンス中です..</p>
      ) : (
        <p>現在サロン1は {peopleCount} 人です</p>
      )}
    </div>
  );
};

export default PeopleCount;