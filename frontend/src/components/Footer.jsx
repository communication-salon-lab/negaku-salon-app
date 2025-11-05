import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-Beige via-Beige to-GreenLight/20 text-base-content overflow-hidden">
      {/* 背景の装飾パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-GreenDark rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-Olive rounded-full translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-GreenLight rounded-full"></div>
      </div>
      
      <div className="relative z-10 p-10">
        {/* 上部のナビゲーションリンク */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a className="link link-hover text-GreenDark hover:text-Olive transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/30">
              ご連絡はこちら
            </a>
            <a className="link link-hover text-GreenDark hover:text-Olive transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/30">
              個人情報の取り扱い
            </a>
          </div>
        </nav>
        
        {/* ソーシャルメディアアイコン */}
        <nav className="mb-8">
          <div className="flex justify-center gap-6">
            <a 
              href="https://x.com/negaku_salon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/20 hover:bg-GreenDark transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-GreenDark group-hover:text-white transition-colors duration-300">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                </path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/negaku_salon/?igsh=MTNzOHFocGg1cHlrNA%3D%3D#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/20 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 503.84 503.84"
                className="fill-current text-GreenDark group-hover:text-white transition-colors duration-300">
                <path
                  d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z"
                  transform="translate(-4.08 -4.08)"/>
                <path
                  d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z"
                  transform="translate(-4.08 -4.08)"/>
                <circle cx="386.4" cy="117.44" r="30.23"/>
              </svg>
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdf30G72eQoyK6lpGS0wbXRhGSQOrVhWPM0pJfbd0Gv6rmF_Q/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/20 hover:bg-Olive transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-GreenDark group-hover:text-white transition-colors duration-300">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20.498 15.5H3.5V20.5H20.498V15.5ZM21.9445 14.4719L21.9661 14.5336L21.9892 14.6345L21.9981 14.7331V21.25C21.9981 21.6297 21.7159 21.9435 21.3499 21.9932L21.2481 22H2.75C2.3703 22 2.05651 21.7178 2.00685 21.3518L2 21.25V14.7506L2.00184 14.6977L2.01271 14.6122C2.02285 14.5584 2.03841 14.5072 2.05894 14.4587L4.81824 8.44003C4.92517 8.2068 5.14245 8.04682 5.39153 8.01047L5.5 8.0026L8.03982 8.00183L7.25089 9.37206L7.18282 9.50183L5.981 9.502L3.918 13.9998H20.07L18.0428 9.65383L18.9052 8.15653C18.9718 8.20739 19.0301 8.26957 19.0771 8.3411L19.1297 8.43553L21.9445 14.4719ZM13.3652 2.05565L13.4566 2.10062L18.6447 5.10375C18.9729 5.29371 19.1033 5.69521 18.9636 6.03728L18.9187 6.1289L16.112 11.001L17.25 11.0016C17.6642 11.0016 18 11.3374 18 11.7516C18 12.1313 17.7178 12.4451 17.3518 12.4948L17.25 12.5016L15.248 12.501L15.2471 12.504H11.1691L11.166 12.501L6.75 12.5016C6.33579 12.5016 6 12.1658 6 11.7516C6 11.3719 6.28215 11.0581 6.64823 11.0085L6.75 11.0016L8.573 11.001L8.39145 10.8963C8.06327 10.7063 7.93285 10.3048 8.0726 9.96272L8.11747 9.8711L12.4341 2.37536C12.6235 2.04633 13.024 1.91557 13.3652 2.05565ZM13.3559 3.77529L9.78781 9.97119L11.566 11.001H14.383L17.248 6.02818L13.3559 3.77529Z">
                  </path>
                </g>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@negaku_salon?_t=ZS-90Yw4Xe853d&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/20 hover:bg-black transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-GreenDark group-hover:text-white transition-colors duration-300">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>
          </div>
        </nav>
        
        {/* 区切り線 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-GreenDark/30 to-transparent mb-6"></div>
        
        {/* コピーライト */}
        <aside className="text-center">
          <p className="text-GreenDark/80 font-medium">
            Copyright © {new Date().getFullYear()} - すべての権利は
            <span className="text-GreenDark font-semibold">Communication Salon Lab</span>
            に帰属します
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
