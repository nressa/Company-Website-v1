var navOffset = jQuery("nav").offset().top;
$(document).ready(function() {
  jQuery('.nav-home').addClass('navbar-transparent' ).removeClass('navbar-custom').attr('style','max-height:90px;');
  $( ".img-logo" ).attr('style','max-height:50px;');
  $( ".nav-link" ).addClass('text-white');

  jQuery(window).scroll(function(){

    var scrollPos = jQuery(window).scrollTop();

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        if(scrollPos >= 50){
          jQuery('.nav-home').addClass('navbar-custom').removeClass('navbar-transparent');
          $( ".img-logo" ).attr('style','max-height:40px;');
          $( ".nav-link" ).addClass('nav-item').removeClass('nav-link-down, text-white');
          $( ".row-form" ).removeClass('form-sticky').addClass('form-normal');
        }
      }


      else{

        if(scrollPos >= 90)
        {
          jQuery('.nav-home').removeClass('navbar-transparent').addClass('navbar-custom').attr('style','max-height:50px;');;
          
            $( ".nav-link" ).addClass('nav-item').removeClass('nav-link-down, text-white');
        }

        if(scrollPos < 90)
        {
          jQuery('.nav-home').addClass('navbar-transparent' ).removeClass('navbar-custom').attr('style','max-height:90px;');
          $( ".img-logo" ).attr('style','max-height:50px;');
          $( ".nav-link" ).addClass('nav-link-down, text-white').removeClass('nav-item');
        }
      
        $(".navbar-list").addClass('navbar-custom');

            jQuery(".status").html(scrollPos);

      }

    });

});