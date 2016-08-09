class Event < ApplicationRecord
  validates :name, :place, :description, :event_date, presence: true
end
