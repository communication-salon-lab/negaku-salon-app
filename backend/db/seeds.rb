Admin.find_or_create_by!(name: 'admin') do |admin|
  admin.password = 'password'
  admin.password_confirmation = 'password'
end

puts "サンプル記事を作成します..."

Article.create!(
  title: '夏のイベント開催のお知らせ',
  content: "8月1日に特別な夏祭りを開催します！\n詳細は後日発表しますので、お楽しみに。",
  # event_dateカラムを追加した場合
  # event_date: '2025-08-01'
)

Article.create!(
  title: '新商品入荷！',
  content: "待望の新商品が入荷しました。\n数量限定ですので、お早めにお買い求めください。",
  # event_date: '2025-08-10'
)

Article.create!(
  title: '臨時休業のお知らせ',
  content: "誠に勝手ながら、8月15日は臨時休業とさせていただきます。\nご不便をおかけしますが、何卒よろしくお願いいたします。",
  # event_date: '2025-08-15'
)

puts "サンプル記事の作成が完了しました。"