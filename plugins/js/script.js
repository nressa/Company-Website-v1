/****************Search Form*****************/

function redirectToList() {
    window.location.replace("list-page.php");
}

/****************Call event planner*******************/

$( ".call" ).hover(
  function() {
    $( this ).append( $( "<span class='call-span'> Talk to an Events Planner</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

/****************Remove to favorites*******************/

$(document).on('click', 'i.bookmark-remove', function(){  
  // var retVal = confirm("Remove bookmark:");
  // if( retVal == true ){
    $(this)
      .addClass('far bookmark-empty')
      .removeClass('fas text-danger bookmark-remove')
      .attr('data-original-title', '')
    
    return true;

   // }else{
    // return false;
   // }

});
/****************Add to favorites*******************/


$(document).on('click', 'i.bookmark-empty', function(){  
  // var retVal = confirm("Add to bookmark:");
  // if( retVal == true ){
    $(this)
      .removeClass('far bookmark-empty')
      .addClass('fas text-danger bookmark-remove')
      .attr('data-original-title', 'Remove bookmark')
    
    return true;

   // }else{
    // return false;
   // }

});


/****************Remove to Bookmark*******************/

$('.removebtn').click(function () {

  var retVal = confirm("Remove bookmark:");
  if( retVal == true ){
    $(this).parent().remove(); 
    return true;
  }
  else{
    return false
  }
});


/****************Tooltip*******************/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


    // $('.tooltip-bottom')
    //   .attr('data-toggle', 'tooltip')
    //   .attr('data-placement', 'top')
    //   .tooltip({
    //     trigger: 'manual'
    //   })
    //   .tooltip('show');

    // $('.tooltip-top')
    //   .attr('data-toggle', 'tooltip')
    //   .attr('data-placement', 'bottom')
    //   .tooltip({
    //     trigger: 'manual'
    //   })
    //   .tooltip('show');


/**********Location Search Button***********/


function mouseOver() {
    $("#form-tag").removeClass('visibility-hidden');
     $("#form-tag").addClass('visibility-visible');

}

function mouseOut() {
    $("#form-tag").addClass('visibility-hidden');
     $("#form-tag").removeClass('visibility-visible');
}

/**********Carousel****************/

$('.carousel').carousel({
    pause: true,
    interval: false
});

/*********************************/
var navOffset = jQuery("nav").offset().top;

jQuery(window).scroll(function(){
var scrollPos = jQuery(window).scrollTop();

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    if(scrollPos >= 50){
      jQuery('.nav-home').addClass('navbar-custom').removeClass('navbar-transparent');
      $( ".img-logo" ).attr('style','max-height:40px;');
      $( ".nav-link" ).addClass('nav-item').removeClass('nav-link-down');
      $( ".row-form" ).removeClass('form-sticky').addClass('form-normal');
    }
  }


  else{

    if(scrollPos >= 90)
    {
      jQuery('.nav-home').removeClass('navbar-transparent').addClass('navbar-custom').attr('style','max-height:50px;');;
      $( ".nav-link" ).addClass('nav-item').removeClass('nav-link-down');
    }

    if(scrollPos < 90)
    {
      jQuery('.nav-home').addClass('navbar-transparent' ).removeClass('navbar-custom').attr('style','max-height:90px;');
      $( ".img-logo" ).attr('style','max-height:50px;');
      $( ".nav-link" ).addClass('nav-link-down').removeClass('nav-item');
    }
  
    $(".navbar-list").addClass('navbar-custom');

        jQuery(".status").html(scrollPos);

  }

});


function mouseOver() {
    $("#form-tag").removeClass('visibility-hidden');
    $("#form-tag").addClass('visibility-visible');
    
}

function mouseOut() {
    $("#form-tag").addClass('visibility-hidden');
    $("#form-tag").removeClass('visibility-visible');
}

function payment(){
  alert("Complete booking process.");
  if (true) {
     window.location="http://localhost/eve/page-bookings.php"; 
  }
}