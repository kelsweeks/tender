class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :plant_tender, null: false, foreign_key: true

      t.timestamps
    end
  end
end
