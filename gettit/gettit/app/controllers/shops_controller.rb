require 'open-uri'
require 'httparty'

class ShopsController < ApplicationController

  def search
    json = open("http://localhost:3001/search/#{params['query']}").read
    # binding.pry
    @links = JSON.parse(json)
    respond_to do |format|
      format.html
      format.json { render :json => @links }
    end
  end

end
