class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :location
      t.string :plant_type
      t.string :care
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
