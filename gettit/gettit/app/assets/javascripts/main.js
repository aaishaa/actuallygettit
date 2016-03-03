"use strict";

(function () {

  // prevent form from submitting/refreshing page:
  $('.pure-form').attr("onsubmit", "return false");

  // use .submit for forms instead of .click.
  $('.pure-form').submit(function(){
    var city = $('.pure-input-rounded').val()   // grabs input value after user hits submit
    var city_n = city.replace(/\s/g, '')  // removes any whitespace, just in case
    $.ajax({
      type: 'POST', 
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city_n + '&units=imperial&appid=44db6a862fba0b067b1930da0d769e98',
      success: function(data){
        // retrieves all city's forecast data
        var info = data.main
        var forecast = "In <span>" + city + "</span> it's <span>" + parseInt(info.temp) + " degrees</span> Farenheit (<span>°F</span>)."
        // add text w/data into empty div
        $('#forecast').html(forecast)
      } // end success

    });  // end .ajax

  });   // end submit function

})();  // end of all functions