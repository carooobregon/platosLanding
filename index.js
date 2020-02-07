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
    $("#alargadatoggle").click(function(){
        console.log("HIDE");
        document.getElementById('titlep').innerHTML = 'BOTANERA ALARGADA';
        document.getElementById('contentp').innerHTML = 'Botaneras alargadas para lucir tus mejores platillos.';
        document.getElementById('car1').src = "images/plato3.png";
    });
  });

  $(document).ready(function(){
    $("#tequitoggle").click(function(){
        console.log("HIDE");
        document.getElementById('titlep').innerHTML = 'TEQUILEROS';
        document.getElementById('contentp').innerHTML = 'Tequileros alargadas para lucir tus mejores platillos.';
        document.getElementById('car1').src = "images/plato4.png";
    });
  });

 $(document).ready(function(){
    $("#platostoggle").click(function(){
        console.log("HIDE");
        document.getElementById('titlep').innerHTML = 'PLATOS PARRILLEROS';
        document.getElementById('contentp').innerHTML = 'Platos individuales en madera de pino o parota grabados con el logo que desees. Perfeccionados para ser prácticos, estéticos y hacer lucir tus mejores platillos.';
        document.getElementById('car1').src = "images/plato1.png";

    //   $(".platos").toggle();
    });
  });

  $(document).ready(function(){
    $("#botaneratoggle").click(function(){
        console.log("HIDE");
        document.getElementById('titlep').innerHTML = 'TABLAS BOTANERAS';
        document.getElementById('contentp').innerHTML = 'Botaneras para lucir tus mejores platillos.';
        document.getElementById('car1').src = "images/plato2.png";
    });
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

