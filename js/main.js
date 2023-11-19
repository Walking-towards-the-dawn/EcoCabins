const swiper = new Swiper('.materials__slider', {
	effect: 'fade',
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},
});
