# == Schema Information
#
# Table name: texts
#
#  id         :integer          not null, primary key
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

require 'spec_helper'

describe 'Text' do

  before do
    @text = Text.new(content: 'This is my content. It is really nice.')
  end

  subject { @text }

  it { should respond_to(:content) }

  @text.should { be_valid }

  describe 'when content is not present' do
    before { @text.content = ' ' }
    @text.should_not { be_valid }
  end


end
