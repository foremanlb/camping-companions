class CreateCampsites < ActiveRecord::Migration[6.1]
  def change
    create_table :campsites do |t|
      t.string :name
      t.string :state
      t.string :address
      t.string :phone_number
      t.string :website
      t.text :description
      t.boolean :full_hookups
      t.boolean :partial_hookups
      t.boolean :fishing
      t.boolean :showers
      t.boolean :bathrooms
      t.string :map_img_url
      t.string :site_img_url
      t.string :season

      t.timestamps
    end
  end
end
