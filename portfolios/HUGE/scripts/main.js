$(function() {
	$('#panel .fa-bars').on('click', function(){
		$('.hamburgerNav').toggleClass('showMenu');
		$(this).toggleClass('fa-times fa-bars');
		var slideout = new Slideout({
		   'panel': document.getElementById('panel'),
		   'menu': document.getElementById('menu'),
		   'padding': 256,
		   'tolerance': 70
		 });
		slideout.toggle();
	});

	$('.hamburgerNav li').on('click', function(){
		$('.hamburgerNav').removeClass('showMenu');
		$('.fa-bars').toggleClass('fa-times fa-bars');
	});

	$('.section3carousel').flickity({
	  // options
	  cellAlign: 'center',
	  contain: true,
	  pageDots: false,
	  wrapAround: true,
	  imagesLoaded: true
	});
});
