import React from 'react';

const categoryBadgeMap = {
  'イベント': 'badge-info', // daisyUIなら 'badge-info'
  '相談会': 'badge-accent', // 'badge-accent'
  'シネマ': 'badge-secondary', // 'badge-secondary'
};

const CategoryBadge = ({ category }) => {
  // マップからクラスを取得。なければデフォルト色（badge-ghost相当）
  const badgeColor = categoryBadgeMap[category] || 'badge-ghost';

  return (
    <div className={`badge badge-outline ${badgeColor} badge-sm text-[10px] md:text-sm md:py-3 md:px-4`}>
      {category}
    </div>
  );
};

export default CategoryBadge;