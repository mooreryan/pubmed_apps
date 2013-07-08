require 'spec_helper'

describe 'AppsPages' do
  subject { page }

  shared_examples_for 'all apps pages' do
    it { should have_title full_title(page_title) }
    it { should have_selector 'h1', text: heading }
  end  

  describe 'Word Cloud' do
    before do
      visit word_cloud_path
      Text.create(content: "Hi my name is Ryan. I'm 25 yrs. old.")
      Text.create(content: "My name is Danny. I'm 25 years old, too.")
    end

    let(:heading) { 'Word Clouds' }
    let(:page_title) { 'Word Clouds' }

    it_should_behave_like 'all apps pages'

    it 'should list all entries in the texts table' do

      Text.all.each do |record|
        page.should have_selector 'li', text: record.content
      end
    end


  end



end
