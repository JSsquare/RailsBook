// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){    
    $('#user_nav').hide();
    $('#toggle_nav_side').hide();
    $('#rails_image').hide();
    $('#comment_area').hide();
    
      $('a#show_nav_down').click(function(){          
        $('#toggle_nav').hide();  
        $('#user_nav').toggle('slow');
        $('#rails_image').toggle('slow');
        $('#toggle_nav_side').fadeIn('slow');
      });
      $('a#show_nav_up').click(function(){          
        $('#toggle_nav_side').hide();  
        $('#user_nav').toggle('slow');
        $('#rails_image').toggle('slow');
        $('#toggle_nav').fadeIn('slow');
      });
      
      $('a#toggle_comment').click(function(){          
        $('#comment_area').toggle('slow');
        $("html, body").animate({scrollTop: 1000}, "slow");
        
      });
      
      $('#sign_up_form form').validate({
          rules: {
              user_email: {
                  required: true,
                  email :true
              }
          }
      });
  });

