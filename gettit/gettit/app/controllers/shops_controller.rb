require 'open-uri'

class ShopsController < ApplicationController

  def search
    json = open("http://localhost:3001/search/#{params['query']}").read
    # binding.pry
    links = JSON.parse(json)
    render :json => links
  end

end
