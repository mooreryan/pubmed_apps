require 'spec_helper'

describe 'AppsPages' do
  subject { page }

  shared_examples_for 'all apps pages' do
    it { should have_title full_title(page_title) }
    it { should have_selector 'h1', text: heading }
  end  

  describe 'Word Cloud' do
    before { visit word_clouds_path }
    let(:heading) { 'Word Clouds' }
    let(:page_title) { 'Word Clouds' }

    it_should_behave_like 'all apps pages'
  end



end
