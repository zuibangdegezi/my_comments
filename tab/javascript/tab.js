$(function(){
	$('.nav-tabs li').hover(function() {

		$('.nav-tabs li').removeClass('active');
		$('.cont-box').removeClass('act');

		$(this).addClass('active');
		$('.cont-box').eq($(this).index()).addClass('act');

	});
})