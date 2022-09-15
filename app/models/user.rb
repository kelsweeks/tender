class User < ApplicationRecord
    has_many :appointments
    has_many :plant_tenders, through: :appointments

    # validates :username,:name,:email,:password_digest, presence: true

    has_secure_password
end
