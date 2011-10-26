// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){    
    $('#user_nav').hide();
      $('a#show_nav').click(function(){
        $('#user_nav').toggle('slow');
      });
  });
