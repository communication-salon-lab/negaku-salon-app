import React from "react";

const AboutPage = () => {
  return (
    <div className="p-10 bg-customBeige">
      <h1 className="text-4xl font-bold text-center mb-10 text-customGreenDark">サロンについて</h1>

      {/* サロンの説明 */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-customGreenDark">サロンとは？</h2>
        <p>大学生のための自由な交流と学びの空間です。</p>
      </div>

      {/* キャラクター紹介 */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-customGreenDark">キャラクター紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* カード1 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/salomal_skip.png"
                alt="さろまる"
                className="w-full h-auto object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-customOlive">サロ丸</h2>
              <p className="break-words">
                ネカプくんに連れられてサロンにやってきた。
                自由気ままな性格でのんびりやさん。
                ものづくりが大好きでDコースにくわしい。
                エプロンはみどり色がお気に入り！
                イベントの時には色が変わることも・・・！？
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-customGreenDark">きほん情報</h3>
                <ul className="list-disc list-inside break-words">
                  <li>しゅみ: おそうじ</li>
                  <li>とくぎ: おもちゃ作り</li>
                  <li>すきなもの: カフェオレ</li>
                  <li>にがてなもの: BADUI</li>
                  <li className="whitespace-nowrap">たんじょうび: 3月6日（サロンの日））</li>
                </ul>
              </div>
            </div>
          </div>

          {/* カード2 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/nekap_ya.png"
                alt="ネカプくん"
                className="w-full h-auto object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-customOlive">ネカプくん</h2>
              <p className="break-words">
                ネ学サロンに現れたなぞの生き物。
                「はじめてネ学サロンで紙コップが使われた時にたましいが宿ったんだ！」と本人いわく。
                どくぜつでツッコミ担当の性格を持ちながら、
                プログラミングが大好きでSコースにくわしい。
                みんなのお兄ちゃん的存在として、頼りにされています。
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-customGreenDark">きほん情報</h3>
                <ul className="list-disc list-inside break-words">
                  <li>しゅみ: お笑いを見ること</li>
                  <li>とくぎ: ゲーム制作</li>
                  <li>すきなもの: コンポタ</li>
                  <li>にがてなもの: ぐちゃぐちゃコード</li>
                  <li className="whitespace-nowrap">たんじょうび: 5月2日（紙コップの日）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* サロンの設備 */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-customGreenDark">サロンの設備</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* カード1 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src=""
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title whitespace-nowrap">コミュニケーションサロン1</h2>
              <p>みんなでワイワイ</p>
              <div className="card-actions justify-end">
                <button className="btn bg-customGreenLight text-white hover:bg-customGreenDark">もっと知る</button>
              </div>
            </div>
          </div>

          {/* カード2 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src=""
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title whitespace-nowrap">コミュニケーションサロン2</h2>
              <p>みんな集中するスペース</p>
              <div className="card-actions justify-end">
                <button className="btn bg-customGreenLight text-white hover:bg-customGreenDark">もっと知る</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ラボ所属の人 */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-customGreenDark">ラボ所属の人</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">

          {/* カード1 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー1</h2>
              <p>プログラム: DS</p>
            </div>
          </div>

          {/* カード2 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー2</h2>
              <p>プログラム: CD</p>
            </div>
          </div>

          {/* カード3 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー3" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー3</h2>
              <p>プログラム: DS</p>
            </div>
          </div>

          {/* カード4 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー4</h2>
              <p>プログラム: CD</p>
            </div>
          </div>

          {/* カード5 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー5" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー5</h2>
              <p>プログラム: DS</p>
            </div>
          </div>

          {/* カード6 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー6" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー5</h2>
              <p>プログラム: DS</p>
            </div>
          </div>


          {/* カード7 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー7" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー5</h2>
              <p>プログラム: DS</p>
            </div>
          </div>

          {/* カード8 */}
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="" alt="メンバー8" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">メンバー5</h2>
              <p>プログラム: DS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
