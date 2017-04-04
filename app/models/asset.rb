class Asset < ApplicationRecord
  validates_presence_of :figure_num, :description, :instructions, required: true
end
