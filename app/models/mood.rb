class Mood < ActiveRecord::Base
  validates :happiness, presence: true
  validates :current_user, presence: true



  belongs_to :user
  has_many :factors, dependent: :destroy

end
