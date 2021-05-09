class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.references :user, null: false, foreign_key: true
      t.references :campsite, null: false, foreign_key: true

      t.timestamps
    end
    add_index :favorites, %i[user_id campsite_id], unique: true
  end
end
