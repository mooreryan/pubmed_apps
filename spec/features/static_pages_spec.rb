require 'spec_helper'

describe 'StaticPages' do 
  subject { page }

  shared_examples_for 'all static pages' do
    it { should have_title full_title(page_title) }
    it { should have_selector 'h1', text: heading }
  end
  
  describe 'Home Page' do 
    before { visit root_path }
    let(:heading) { 'PubMed Fun!' }
    let(:page_title) { 'Home' }

    it_should_behave_like 'all static pages'
  end

end
