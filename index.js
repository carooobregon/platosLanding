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

 $(document).ready(function(){
	$(".owl-carousel").owlCarousel();
  });
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
