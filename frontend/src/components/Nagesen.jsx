import { useState } from 'react';

// 2枚目に表示する画像のリスト（新しい順）
const imagesForSlot2 = [
  { src: '/price3.png', label: '2025年度後期' },
  { src: '/price2.png', label: '2025年度前期' },
  { src: '/price1.png', label: '2024年度後期' },
];

function Nagesen() {
  // 現在2枚目に表示している画像のインデックスを管理するstate
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 前へボタン
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? imagesForSlot2.length - 1 : prevIndex - 1
    );
  };

  // 次へボタン
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesForSlot2.length);
  };

  // 特定のインデックスに直接ジャンプ
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
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
      <div className="p-4 flex flex-col">
        {/* 期間ラベル */}
        <div className="text-center mb-2">
          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
            {imagesForSlot2[currentImageIndex].label}
          </span>
        </div>

        {/* コントロールエリア */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* 前へボタン */}
          <button
            onClick={handlePrevClick}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition shadow-md"
            aria-label="前の期間"
          >
            ←
          </button>

          {/* インジケーター（ドット） */}
          <div className="flex gap-2">
            {imagesForSlot2.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentImageIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`${imagesForSlot2[index].label}に移動`}
              />
            ))}
          </div>

          {/* 次へボタン */}
          <button
            onClick={handleNextClick}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition shadow-md"
            aria-label="次の期間"
          >
            →
          </button>
        </div>

        {/* ページ番号表示 */}
        <div className="text-center mb-2 text-sm text-gray-600">
          {currentImageIndex + 1} / {imagesForSlot2.length}
        </div>

        {/* 画像表示エリア */}
        <div className="relative flex-grow">
          <img
            src={imagesForSlot2[currentImageIndex].src}
            alt="投げ銭の記録"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Nagesen;