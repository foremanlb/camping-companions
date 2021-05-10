class Post < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :campsite, dependent: :destroy
end
