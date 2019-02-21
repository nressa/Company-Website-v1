/***********Price Slide************/
  $( function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 500,
      max: 250000,
      values: [ 500, 80000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "₱" + ui.values[ 0 ] + " - ₱" + ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( "₱" + $( "#slider-price" ).slider( "values", 0 ) +
      " - ₱" + $( "#slider-price" ).slider( "values", 1 ));
  } );

/***********Price Slide************/
  $( function() {
    $( "#slider-guest" ).slider({
      range: true,
      min: 1,
      max: 500,
      values: [ 1, 500 ],
      slide: function( event, ui ) {
        $( "#guest" ).val(  ui.values[ 0 ] + " -" + ui.values[ 1 ] );
      }
    });
    $( "#guest" ).val( $( "#slider-guest" ).slider( "values", 0 ) +
      " -" + $( "#slider-guest" ).slider( "values", 1 ) );
  } );
/**********Time Range**************/