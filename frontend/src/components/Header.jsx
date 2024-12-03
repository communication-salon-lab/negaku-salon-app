import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mt-2 fixed top-0 left-0 w-full z-50 animate-fade-in-fwd">
      <div className="container mx-auto flex justify-between items-center font-sans">
        {/* ロゴとタイトル */}
        <div className="flex items-center">
          <img src="/logo.png" alt="ネ学サロン" className="lg:w-20 w-14" />
          <Link to="/" className="md:text-2xl">
            ネ学サロン
          </Link>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-center">
            <Link to="/" className="nav-link font-sans mr-3 md:text-xl">
              ホーム
            </Link>
            <Link to="/about" className="nav-link font-sans md:text-xl mr-3">
              サロンについて
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

