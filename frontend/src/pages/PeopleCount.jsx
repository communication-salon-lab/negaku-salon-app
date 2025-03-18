import React, { useState, useEffect} from "react";

const PeopleCount = () => {
  const [peopleCount, setPeopleCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchPeopleCount = async () => {
    try {
      const response = await fetch("https://amvfd3xhzi.execute-api.ap-northeast-1.amazonaws.com/dev");
      if (!response.ok) {
        throw new Error("Network response was not ok");
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
      console.error("Failed to fetch people count:", err);
      setError(err);
    }
  };

  useEffect(() => {
    // 人数を取得
    fetchPeopleCount();
    // 10秒ごとに最新データを更新
    const interval = setInterval(fetchPeopleCount, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">現在メンテナンス中です</p>
      ) : peopleCount !== null ? (
        <p>現在サロンは {peopleCount} 人！</p>
      ) : (
        <p>読み込み中…</p>
      )}
    </div>
  );
};

export default PeopleCount;