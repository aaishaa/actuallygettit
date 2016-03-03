"use strict";
$(document).ready(function(){
  $('li.product').on("click", function(){
    var marker = $(this).find('div.marker');
    $(marker).toggleClass("unselected");
    // css("background", "red");
  });
});