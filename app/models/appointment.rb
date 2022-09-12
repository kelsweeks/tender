class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :plant_tender
end
