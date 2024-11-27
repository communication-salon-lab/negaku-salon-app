import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white z-10">
      {/* ロゴ部分 */}
      <div className="text-2xl font-bold">ネ学サロン</div>
      {/* ナビゲーション */}
      <nav className="flex space-x-4 text-lg">
        <Link to="/" className="hover:underline">
          ホーム
        </Link>
        <Link to="/about" className="hover:underline">
          サロンについて
        </Link>
      </nav>
    </div>
  );
};

export default Header;
