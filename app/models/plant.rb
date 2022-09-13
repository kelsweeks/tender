class Plant < ApplicationRecord
  belongs_to :user

  validates :name,:location,:care,presence: true
end
