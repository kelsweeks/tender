class PlantTender < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments 

    validates :name,:phone, presence:true    
end
