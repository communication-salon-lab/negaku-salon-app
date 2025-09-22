import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';
import axios from 'axios';

const ArticleEditorPage = () => {
  const { id } = useParams(); // URLからIDを取得 (例: /articles/5/edit -> idは'5')
  const navigate = useNavigate();
  const isEditing = Boolean(id); // IDがあれば編集モード、なければ新規作成モード

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('イベント');
  const [eventDate, setEventDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 編集モードの場合のみ、既存の記事データを読み込む
    if (isEditing) {
      setLoading(true);
      apiClient.get(`/articles/${id}`)
        .then(response => {
          const { title, content, category, event_date } = response.data;
          setTitle(title);
          setContent(content);
          setCategory(category || 'イベント'); // categoryがnullの場合のフォールバック
          setEventDate(event_date);
        })
        .catch(err => {
          setError('記事の読み込みに失敗しました。');
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category || !eventDate) {
      setError('すべての項目を入力してください。');
      return;
    }

    if (!title || !content) {
      setError('タイトルと本文を入力してください。');
      return;
    }

    const articleData = {
      article: {
        title,
        content,
        category,
        event_date: eventDate // Railsの命名規則(snake_case)に合わせる
      }
    };

    try {
      if (isEditing) {
        // 編集モードの場合はPUTリクエスト
        await apiClient.put(`/articles/${id}`, articleData);
      } else {
        // 新規作成モードの場合はPOSTリクエスト
        await apiClient.post('/articles', articleData);
      }
      // 成功したら管理者ダッシュボードに戻る
      navigate('/dashboard');
    } catch (err) {
      setError('記事の保存に失敗しました。');
      console.error(err);
    }
  };

  if (loading) return <p>読み込み中...</p>;

  return (
    <div className="bg-gray-100 min-h-screen pt-24 pb-12">
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <form onSubmit={handleSubmit}>
          {/* ★ 2. ヘッダーと操作ボタン */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {isEditing ? '記事の編集' : '新規記事の作成'}
            </h1>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn btn-ghost"
              >
                キャンセル
              </button>
              <button type="submit" className="btn bg-Olive text-white hover:bg-GreenDark">
                {isEditing ? '更新する' : '投稿する'}
              </button>
            </div>
          </div>

          {/* ★ 3. フォーム本体 (白いカード) */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {error && (
              <div role="alert" className="alert alert-error text-sm p-2">
                <span>{error}</span>
              </div>
            )}
            {/* タイトル */}
            <div className="form-control">
              <label className="label"><span className="label-text">タイトル</span></label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* カテゴリ */}
              <div className="form-control">
                <label className="label"><span className="label-text">カテゴリ</span></label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="お知らせ">お知らせ</option>
                  <option value="イベント">イベント</option>
                  <option value="相談会">相談会</option>
                  <option value="シネマ">シネマ</option>
                </select>
              </div>
              {/* 開催日 */}
              <div className="form-control">
                <label className="label"><span className="label-text">開催日</span></label>
                <input
                  type="date"
                  value={eventDate || ''}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* 本文 */}
            <div className="form-control">
              <label className="label"><span className="label-text">本文</span></label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="15"
                className="textarea textarea-bordered w-full text-base"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditorPage;
