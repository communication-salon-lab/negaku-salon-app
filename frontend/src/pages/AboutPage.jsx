import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>コミュニケーションサロンラボ｜サロンについて | 専修大学 ネットワーク情報学部</title>
        <meta
          name="description"
          content="専修大学ネットワーク情報学部コミュニケーションサロンラボの紹介ページ。"
        />
        <link rel="canonical" href="https://communication-salon.com/about" />
        <meta property="og:title" content="コミュニケーションサロンラボ｜サロンについて" />
        <meta
          property="og:description"
          content="学生・教員・卒業生が自由に集まれる居場所を作るラボ。"
        />
        <meta property="og:url" content="https://communication-salon.com/" />
        <meta property="og:image" content="https://communication-salon.com/og-image-about.png" />
      </Helmet>
      <div className="p-5 lg:p-10 pt-20 bg-Beige text-left font-sans">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center text-GreenDark animate-fade-in-fwd">サロンについて</h1>

        <div className="breadcrumbs text-sm mb-8 animate-fade-in-fwd">
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a>サロンについて</a></li>
          </ul>
        </div>

        {/* サロンの説明 */}
        <div className="mb-10 pt-4 text-base md:text-xl lg:text-xl animate-fade-in-bottom">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-GreenDark">コミュニケーションサロンラボ</h2>
          <p className="break-words">
            ネットワーク情報学部の学生や教員、卒業生が自由に出入りし、自由に過ごせる居場所づくりを目指すラボです。<br />
            空間、動線、道具、イベントなどを考えて、コミュニケーションが広がる場所を生み出します。
            将来的には、他のラボと連携し、近隣地域住民との交流への拡大も考えています。
          </p>
        </div>

        {/* キャラクター紹介 */}
        <div className="mb-10 pt-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-GreenDark animate-fade-in-bottom">キャラクター紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* カード1 */}
            <div className="card lg:card-side bg-base-100 shadow-xl animate-fade-in-bottom">
              <figure>
                <img
                  src="/salomal_skip.png"
                  alt="さろまる"
                  className="w-full h-auto object-contain"
                />
              </figure>
              <div className="card-body text-base md:text-xl lg:text-xl">
                <h2 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">サロ丸</h2>
                <p className="break-words">
                  ネカプくんに連れられてサロンにやってきた。
                  自由気ままな性格でのんびりやさん。
                  ものづくりが大好きでDコースにくわしい。
                  エプロンはみどり色がお気に入り！
                  イベントの時には色が変わることも・・・！？
                </p>
                <div className="mt-4">
                  <h3 className="text-Olive text-lg md:text-xl lg:text-2xl">きほん情報</h3>
                  <ul className="list-disc list-inside break-words">
                    <li>しゅみ: おそうじ</li>
                    <li>とくぎ: おもちゃ作り</li>
                    <li>すきなもの: カフェオレ</li>
                    <li>にがてなもの: BADUI</li>
                    <li className="break-words">たんじょうび: 3月6日</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* カード2 */}
            <div className="card lg:card-side bg-base-100 shadow-xl animate-fade-in-bottom">
              <figure>
                <img
                  src="/nekap_ya.png"
                  alt="ネカプくん"
                  className="w-full h-auto object-contain"
                />
              </figure>
              <div className="card-body text-base md:text-xl lg:text-xl">
                <h2 className="card-title text-Olive text-lg md:text-xl lg:text-2xl">ネカプくん</h2>
                <p className="break-words">
                  ネ学サロンに現れたなぞの生き物。
                  「はじめてネ学サロンで紙コップが使われた時にたましいが宿ったんだ！」と本人いわく。
                  どくぜつでツッコミ担当の性格を持ちながら、
                  プログラミングが大好きでSコースにくわしい。
                  みんなのお兄ちゃん的存在として、頼りにされています。
                </p>
                <div className="mt-4">
                  <h3 className="text-Olive text-lg md:text-xl lg:text-2xl">きほん情報</h3>
                  <ul className="list-disc list-inside break-words">
                    <li>しゅみ: お笑いを見ること</li>
                    <li>とくぎ: ゲーム制作</li>
                    <li>すきなもの: コンポタ</li>
                    <li>にがてなもの: 乱雑なコード</li>
                    <li className="break-words">たんじょうび: 5月2日</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* サロンの設備 */}
        <div className="mb-10 pt-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-GreenDark animate-fade-in-bottom">サロンの設備</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* カード1 */}
            <div className="card lg:card-side bg-base-100 shadow-xl animate-fade-in-bottom">
              <figure>
                <img
                  src="/salon1.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body text-base md:text-xl lg:text-xl">
                <h2 className="card-title whitespace-nowrap text-Olive">コミュニケーションサロン1</h2>
                <p>
                  みんなで話しながら、活動できる場所です。<br />
                  様々なイベントを不定期で開催しています！
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn bg-GreenLight text-white hover:bg-GreenDark">もっと知る</button>
                </div> */}
              </div>
            </div>

            {/* カード2 */}
            <div className="card lg:card-side bg-base-100 shadow-xl animate-fade-in-bottom">
              <figure>
                <img
                  src="/salon2.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body text-base md:text-xl lg:text-xl">
                <h2 className="card-title whitespace-nowrap text-Olive">コミュニケーションサロン2</h2>
                <p>
                  静かに作業したい人向けの場所です。<br />
                  しっかり課題をやりたい人におすすめ！
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn bg-GreenLight text-white hover:bg-GreenDark">もっと知る</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ラボ所属の人 */}
        {/* <div className="mb-10 pt-4 text-base md:text-xl lg:text-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-GreenDark animate-fade-in-bottom">ラボ所属の人</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"> */}
            {/* カード1 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー1" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー1</h2>
                <p>プログラム: DS</p>
              </div>
            </div> */}

            {/* カード2 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー2" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー2</h2>
                <p>プログラム: CD</p>
              </div>
            </div> */}

            {/* カード3 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー3" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー3</h2>
                <p>プログラム: DS</p>
              </div>
            </div> */}

            {/* カード4 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー4" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー4</h2>
                <p>プログラム: CD</p>
              </div>
            </div> */}

            {/* カード5 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー5" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー5</h2>
                <p>プログラム: DS</p>
              </div>
            </div> */}

            {/* カード6 */}
            {/* <div className="card bg-base-100 w-80 shadow-xl animate-fade-in-bottom">
              <figure>
                <img src="" alt="メンバー6" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">メンバー5</h2>
                <p>プログラム: DS</p>
              </div>
            </div> */}
        {/*
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutPage;
