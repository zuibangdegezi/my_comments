$(function(){

	function tab(element,triggers,contents) {

		$(element).find(triggers).hover(function() {

			$(triggers).removeClass('active');
			$(contents).removeClass('active');

			$(this).addClass('active');
			$(contents).eq($(this).index()).addClass('active');

		});
	}
	tab('.wrap','.nav-tabs li','.cont-box');
})