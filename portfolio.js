function btnOnClick(obj) {

	var element = document.getElementsByClassName(obj);
	// element.classList.add("display-none");
	// $( "."+obj ).addClass('display-none');
	if(obj === 'featured')
	{
		$( ".hotDeal" ).addClass('display-none').removeClass('display-visible');
		$( ".new" ).addClass('display-none').removeClass('display-visible');
		$( "."+obj ).addClass('display-visible');
	}

	else if(obj === 'hotDeal')
	{
		$( ".featured" ).addClass('display-none').removeClass('display-visible');
		$( ".new" ).addClass('display-none').removeClass('display-visible');
		$( "."+obj ).addClass('display-visible');
	}

	else if(obj === 'new'){
		$( ".featured" ).addClass('display-none').removeClass('display-visible');
		$( ".hotDeal" ).addClass('display-none').removeClass('display-visible');
		$( "."+obj ).addClass('display-visible');

	}

	else{
		$( ".featured" ).addClass('display-visible');
		$( ".hotDeal" ).addClass('display-visible');
		$( ".new" ).addClass('display-visible');
	}
}
