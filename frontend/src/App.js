import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {
  const location =useLocation()
  return (
    <div>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
