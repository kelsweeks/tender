class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :plant_type, :care
  has_one :user
end
