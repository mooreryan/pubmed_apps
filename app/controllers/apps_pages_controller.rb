class AppsPagesController < ApplicationController
  def word_cloud
    @text = Text.new
    @texts = Text.all
  end



end
