$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
	$('.nav-link').toggleClass('scrolled-text', $(this).scrollTop() > 100);
});


// $(document).ready(function () {
// 		$('.menu').click(function () {
// 				var $clicked = $(this)
// 				$('.menu').each(function(){
// 						var $menu = $(this);
// 						if (!$menu.is($clicked))
// 						{
// 								$($menu.attr('data-item')).hide();
// 						}
// 				});
// 				$($clicked.attr('data-item')).toggle();
// 		});
// });

$("#platos").click(function(){
 	$(".platosDesc").css("display", "inline");
   $("#platos").css("font-weight", "700");
 });
