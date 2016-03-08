class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

# PUT IN SEARCH CONTROLLER 
# require 'net/http'
# def getResults
#   url = URI.parse('http://localhost:3001/search/#{searchterm}')
#   req = Net::HTTP::Get.new(url.to_s)
#   res = Net::HTTP.start(url.host, url.port) {|http|
#     http.request(req)
#   }
#   puts res.body # equal to your array of links
#   render :erbtemplate, { @items = res.body }
# end


end
