class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favorites
  has_many :campsites, through: :favorites
  has_many :posts
  has_many :campsites, ->(user) { where favorites: user.favorites }, through: :posts
end
