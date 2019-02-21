
jQuery(window).scroll(function(){

    var scrollPos = jQuery(window).scrollTop();

    if( scrollPos >= 1800 )
    {
    	$( ".scrollOne" ).addClass('fixed-position')
    }
    if( scrollPos >= 2112 )
    {
    	$( ".scrollTwo" ).addClass('fixed-position');
    	$( ".scrollOne" ).removeClass('fixed-position');
    }
    if( scrollPos >= 2352 )
    {
    	$( ".scrollThree" ).addClass('fixed-position');
    	$( ".scrollTwo" ).removeClass('fixed-position');
    }

    if(scrollPos >=580 )
    {
        $( "nav" ).addClass('fixed-top');
    }

    if(scrollPos < 580 )
    {
        $( "nav" ).removeClass('fixed-top');
    }
    
    console.log(scrollPos)

})