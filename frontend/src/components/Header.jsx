import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { FEEDBACK_FORM_URL } from '../constants/links';

// ナビゲーション項目（PC・スマホ共通）
const NAV_ITEMS = [
  { label: 'ホーム', to: '/' },
  { label: 'サロンについて', to: '/about' },
  { label: '要望・意見', href: FEEDBACK_FORM_URL },
];

// 内部リンクは Link、外部リンクは新しいタブで開く a タグ
const NavItem = ({ item, children, ...props }) =>
  item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <Link to={item.to} {...props}>
      {children}
    </Link>
  );

const BAR = 'absolute w-6 h-0.5 bg-GreenDark rounded-full transition duration-300';

const Header = () => {
  // メニューを開いたページのパス。ページが変わると自動的に閉じた扱いになる
  const { pathname } = useLocation();
  const [openPath, setOpenPath] = useState(null);
  const isOpen = openPath === pathname;

  // メニューを開いている間は背景のスクロールを止める
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 下にスクロールしたら隠し、上にスクロールしたら出す（ページ上部 100px 以内では常に表示）
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = Math.max(window.scrollY, 0); // iOS のバウンスでマイナスになる分を無視
      if (Math.abs(y - lastY) < 10) return; // 小さな揺れは無視
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // 登場アニメーション（transform を保持する）と隠す transform がぶつからないよう、アニメーションは内側の div に付ける
    <header
      className={`mt-2 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : ''
      }`}
    >
      <div className="relative container mx-auto flex justify-between items-center font-sans px-4 py-3 animate-fade-in-fwd">
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

        {/* ナビゲーション（PC） */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              className="nav-link px-4 py-2 text-xl rounded-lg hover:bg-Olive/10 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-Olive/20 to-GreenDark/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </NavItem>
          ))}
        </nav>

        {/* ハンバーガーボタン（スマホ） */}
        <button
          type="button"
          onClick={() => setOpenPath(isOpen ? null : pathname)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-Olive"
        >
          <span className={`${BAR} ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`${BAR} ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
          <span className={`${BAR} ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </button>
      </div>

      {/* 全画面メニュー（スマホ）。header は transform 付きのアニメーションがあり fixed が画面基準にならないため body に出す。中のリンクを押したら閉じる */}
      {createPortal(
        <nav
          id="mobile-menu"
          onClick={() => setOpenPath(null)}
          className={`md:hidden fixed inset-0 z-40 bg-Beige flex items-center justify-center transition duration-300 ${
            isOpen ? '' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavItem item={item} className="text-2xl font-bold text-GreenDark hover:text-Olive transition-colors duration-300">
                  {item.label}
                </NavItem>
              </li>
            ))}
          </ul>
        </nav>,
        document.body
      )}
    </header>
  );
};

export default Header;
