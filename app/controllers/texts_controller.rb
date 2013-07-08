class TextsController < ApplicationController
  def new
    @text = Text.new

    redirect_to word_cloud_path

  end
end
