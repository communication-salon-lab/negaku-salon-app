import React, { useEffect } from 'react';

const SnsSection = () => {
  useEffect(() => {
    // TikTokウィジェットスクリプトの読み込み
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const tiktokScript = document.createElement('script');
      tiktokScript.src = 'https://www.tiktok.com/embed.js';
      tiktokScript.async = true;
      document.body.appendChild(tiktokScript);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-Beige via-white to-Beige p-5 lg:p-10 animate-fade-in-bottom">
      <div className="text-center mb-12">
        <h2 className="text-responsive-xl font-bold gradient-text mb-3 animate-slide-in-left">
          SNS最新情報
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-Olive to-GreenDark mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-responsive-base">
          サロンの日々の活動をSNSでチェック
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* X (Twitter) セクション */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-large hover-lift p-6 h-full">
              {/* ヘッダー */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-blue-100">
                <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">X (Twitter)</h3>
                  <p className="text-sm text-gray-500">@negaku_salon</p>
                </div>
              </div>
              
              {/* Twitter埋め込み */}
              <div className="overflow-hidden max-h-[500px]">
                <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg">
                  <a
                    href="https://twitter.com/negaku_salon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-blue-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current text-white">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">@negaku_salon</p>
                      <p className="text-sm text-gray-500">Xで最新情報をチェック →</p>
                    </div>
                  </a>
                  <div className="text-center py-8 text-gray-500">
                    <p className="mb-4">最新のポストを見るには</p>
                    <a
                      href="https://twitter.com/negaku_salon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                      Xで開く
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram セクション */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-large hover-lift p-6 h-full">
              {/* ヘッダー */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-pink-100">
                <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 503.84 503.84"
                    className="fill-current text-white">
                    <path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/>
                    <path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/>
                    <circle cx="386.4" cy="117.44" r="30.23"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Instagram</h3>
                  <p className="text-sm text-gray-500">@negaku_salon</p>
                </div>
              </div>
              
              {/* Instagram埋め込み */}
              <div className="overflow-hidden max-h-[500px]">
                <iframe
                  src="https://www.instagram.com/negaku_salon/embed"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="rounded-lg"
                  title="Instagram Profile"
                ></iframe>
              </div>
            </div>
          </div>

          {/* TikTok セクション */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-large hover-lift p-6 h-full">
              {/* ヘッダー */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-gray-200">
                <div className="p-2 bg-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">TikTok</h3>
                  <p className="text-sm text-gray-500">@negaku_salon</p>
                </div>
              </div>
              
              {/* TikTok埋め込み */}
              <div className="overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="flex justify-center">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@negaku_salon" 
                    data-unique-id="negaku_salon" 
                    data-embed-type="creator"
                    style={{ maxWidth: '780px', minWidth: '288px' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/@negaku_salon?refer=creator_embed"
                      >
                        @negaku_salon
                      </a>
                    </section>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* フォローボタンセクション */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 p-6 bg-white rounded-2xl shadow-large">
            <a
              href="https://twitter.com/negaku_salon"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl font-medium shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
              <span>フォロー</span>
            </a>
            
            <a
              href="https://www.instagram.com/negaku_salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-xl font-medium shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 503.84 503.84" className="fill-current">
                <path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/>
                <path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/>
                <circle cx="386.4" cy="117.44" r="30.23"/>
              </svg>
              <span>フォロー</span>
            </a>
            
            <a
              href="https://www.tiktok.com/@negaku_salon"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>フォロー</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnsSection;

