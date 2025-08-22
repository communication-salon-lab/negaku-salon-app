import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';

const ArticleEditorPage = () => {
  const { id } = useParams(); // URLからIDを取得 (例: /articles/5/edit -> idは'5')
  const navigate = useNavigate();
  const isEditing = Boolean(id); // IDがあれば編集モード、なければ新規作成モード

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 編集モードの場合のみ、既存の記事データを読み込む
    if (isEditing) {
      setLoading(true);
      apiClient.get(`/articles/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setContent(response.data.content);
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
    if (!title || !content) {
      setError('タイトルと本文を入力してください。');
      return;
    }

    const articleData = { article: { title, content } };

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
    <div>
      <h1>{isEditing ? '記事の編集' : '新規記事の作成'}</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>タイトル:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>本文:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="15"
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit">
          {isEditing ? '更新する' : '投稿する'}
        </button>
        <button type="button" onClick={() => navigate('/admin')} style={{ marginLeft: '10px' }}>
          キャンセル
        </button>
      </form>
    </div>
  );
};

export default ArticleEditorPage;
