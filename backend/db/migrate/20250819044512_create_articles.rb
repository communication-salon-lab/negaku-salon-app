class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.date :event_date

      t.timestamps
    end
  end
end
