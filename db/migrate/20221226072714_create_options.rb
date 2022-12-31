class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.string :key, null: false, unique: true
      t.string :value, null: false
      t.timestamps
    end
  end
end
