class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
  has_one :plant_tender
end
