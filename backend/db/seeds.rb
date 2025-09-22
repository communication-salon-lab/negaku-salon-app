Admin.find_or_create_by!(name: 'admin') do |admin|
  admin.password = 'password'
  admin.password_confirmation = 'password'
end

puts "サンプル記事を作成します..."

Article.create!(
  title: '夏のイベント開催のお知らせ',
  content: "8月1日に特別な夏祭りを開催します！\n詳細は後日発表しますので、お楽しみに。",
  category: 'イベント',
  event_date: '2025-08-01'
)

Article.create!(
  title: 'プログラミング相談会',
  content: "毎週水曜日にプログラミングの相談会を実施しています。\n初心者の方、大歓迎です。",
  category: '相談会',
  event_date: '2025-09-17'
)

Article.create!(
  title: '臨時休業のお知らせ',
  content: "誠に勝手ながら、9月20日は臨時休業とさせていただきます。\nご不便をおかけしますが、何卒よろしくお願いいたします。",
  category: 'お知らせ', # 例として「お知らせ」カテゴリを追加
  event_date: '2025-09-20'
)

puts "サンプル記事の作成が完了しました。"