import ReactGA from 'react-ga4';

// Googleアナリティクスの測定IDを設定
// 本番環境では環境変数から取得することを推奨
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-121P8NWWS';

// Googleアナリティクスの初期化
export const initGA = () => {
  // 開発環境では無効化する場合はコメントアウトを外す
  // if (process.env.NODE_ENV === 'development') return;
  
  ReactGA.initialize(TRACKING_ID, {
    // デバッグモード（開発時のみ有効にすることを推奨）
    // gaOptions: {
    //   debug_mode: true,
    // },
  });
};

// ページビューを記録
export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// カスタムイベントを記録
export const logEvent = (category, action, label = '') => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default ReactGA;

