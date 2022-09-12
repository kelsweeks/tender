class User < ApplicationRecord
    has_many :appointments
    has_many :plant_tenders, through: :appointments
    has_many :plants
end
