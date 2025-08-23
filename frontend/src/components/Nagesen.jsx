import { useState } from 'react';

// 2枚目に表示する画像のリスト
const imagesForSlot2 = [
  '/price2.png', // 初期表示 (インデックス 0)
  '/price1.png', // 切り替え後 (インデックス 1)
];

function Nagesen() {
  // 現在2枚目に表示している画像のインデックスを管理するstate
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 「次へ」ボタンがクリックされたときの処理
  const handleNextClick = () => {
    // 次の画像のインデックスを計算してstateを更新 (リストの最後に達したら最初に戻る)
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesForSlot2.length);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 w-3/5">
      {/* 1枚目 (固定) */}
      <div className="p-4">
        <img
          src="/nagesen.png"
          alt="さろまる"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2枚目 (切り替え機能付き) */}
      <div className="p-4 relative"> {/* ボタンを配置するため relative を追加 */}
        <img
          src={imagesForSlot2[currentImageIndex]} // stateを使って表示する画像を動的に変更
          alt="投げ銭の記録"
          className="w-full h-auto object-contain"
        />
        {/* 次へボタン */}
        <button
          onClick={handleNextClick}
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white font-bold py-1 px-3 rounded-full hover:bg-opacity-75 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Nagesen;