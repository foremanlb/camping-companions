class Campsite < ApplicationRecord
  has_many :posts, as: :publish, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
end
