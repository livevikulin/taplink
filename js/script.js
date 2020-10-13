$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
				centerPadding: '8px'
			  }
			}
		  ]
	});
});