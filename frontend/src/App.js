import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleEditorPage from './pages/ArticleEditorPage';
import ArticleListPage from './pages/ArticleListPage';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
import { initGA, logPageView } from './analytics';

// 認証が必要なページを守るためのコンポーネント
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  // トークンがあれば子コンポーネント（AdminDashboard）を表示
  // なければ '/login' ページにリダイレクト
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const location = useLocation();

  // Googleアナリティクスの初期化（初回のみ）
  useEffect(() => {
    initGA();
  }, []);

  // ページ遷移時にページビューを記録
  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <Header/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        {/* 新規作成ページ */}
        <Route
          path="/admin/articles/new"
          element={
            <PrivateRoute>
              <ArticleEditorPage />
            </PrivateRoute>
          }
        />
        {/* 編集ページ */}
        <Route
          path="/admin/articles/:id/edit"
          element={
            <PrivateRoute>
              <ArticleEditorPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
