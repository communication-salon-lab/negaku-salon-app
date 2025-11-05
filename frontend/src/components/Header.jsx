import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mt-2 fixed top-0 left-0 w-full z-50 animate-fade-in-fwd">
      <div className="relative container mx-auto flex justify-between items-center font-sans px-4 py-3">
        {/* ロゴとタイトル */}
        <div className="flex items-center group">
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="ネ学サロン" 
              className="lg:w-20 w-14 transition-transform duration-300 group-hover:scale-105" 
            />
            {/* ロゴの周りの装飾リング */}
            <div className="absolute inset-0 rounded-full border-2 border-Olive/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <Link 
            to="/" 
            className="md:text-2xl text-xl font-bold text-GreenDark ml-3 hover:text-Olive transition-colors duration-300 relative"
          >
            ネ学サロン
            {/* タイトル下のアクセントライン */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-Olive to-GreenDark group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-center space-x-1">
          <Link 
            to="/" 
            className="nav-link font-sans px-4 py-2 md:text-xl text-lg rounded-lg hover:bg-Olive/10 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">ホーム</span>
            <div className="absolute inset-0 bg-gradient-to-r from-Olive/20 to-GreenDark/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
          <Link 
            to="/about" 
            className="nav-link font-sans px-4 py-2 md:text-xl text-lg rounded-lg hover:bg-Olive/10 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">サロンについて</span>
            <div className="absolute inset-0 bg-gradient-to-r from-Olive/20 to-GreenDark/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

