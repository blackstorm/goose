class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :slug, null: true
      t.text :content, null: true
      t.string :status, null: false, default: 'draft'
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
