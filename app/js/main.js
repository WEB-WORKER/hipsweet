$(document).ready(function(){
	$('.sweet-cupcake__slider').slick({
				dots: true,
				autoplay: true
			});
	$('.sweet-cupcake__slider-item').css({display: 'block'});
	//team
	//tabs
	$('.tab').css({'display': 'none'});
	$('#tab1').css({'display': 'block'});
	$('.team__link').click(function(e){
		e.preventDefault();
		$(this).closest('.team__item').addClass("active");	
		$(this).closest('.team__item').siblings().removeClass("active");
		var tab = $(this).attr('href');
		console.log(tab);
		var nottab = $('.tab').siblings();
		nottab.css({'display': 'none'});
		$(tab).fadeIn(400);
	});
	//team
	//mask
	$(function(){
  		$("#phone").mask("8(999) 999-99-99");
	});	

	//questions
	//accordion
	$(".questions__desc-wrap .questions__description").hide();
	$(".questions__desc-wrap .questions__desc-item.active .questions__description").show();
	$(".questions__desc-wrap .questions__description").prev().click(function() {
	$(this).parents(".questions__desc-wrap").find(".questions__description").slideUp().prev();
	$(".questions__desc-item").not(this).removeClass("active");
	$(this).next().not(":visible").slideDown().prev();
	$(this).parent().addClass("active");
	});
	    /*Scroll-script*/
        function scrollToDiv(element,navheight){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 500);
        }
        $('.top_nav__sweets-link').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,350);
            return false;
        });
        $('.top_nav__deliver-link').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,600);
            return false;
        });
        $('.top_nav__company-link').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,0);
            return false;
        }); 
        $('.top_nav__team-link').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,-100);
            return false;
        });
        $('.deliver__link-form').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,500);
            return false;
        });
        //ScrollUP
        $('#scrollup img').mouseover( function(){
		$( this ).animate({opacity: 0.65},100);
		}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
		}).click( function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
		});

		$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('fast');
			}
		});
		//mail_send
		$('#mail_send').submit(function(){
		var str = $(this).serialize();
		$.ajax({
			url: 'php/mail.php',
			type: 'POST',
			data: str
			}).done(function(){
				alert("Спасибо! Скоро мы с вами свяжемся.");
			});
			return false;
		});
});
//end jQuery







    
