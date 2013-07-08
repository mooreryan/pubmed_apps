# == Schema Information
#
# Table name: texts
#
#  id         :integer          not null, primary key
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

include Treat::Core::DSL
require 'lemmatizer'

class Text < ActiveRecord::Base
  # not sure how to do the attr_accessible in rails 4
  validates :content, presence: true


end
