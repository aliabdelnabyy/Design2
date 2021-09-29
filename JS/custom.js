/*global $, window */
$(function(){
	'use strict';
	//Adjust header height
	var myheader = $('.header');
	
	myheader.height($(window).height());
	
	$(window).resize(function(){
		
	myheader.height($(window).height());
		
	});
	// links active
	$('.links li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	//adjust bxslider center
	$('.slider').each(function(){
		$(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
	});
	
	// For Slider
	
	$('.slider').bxSlider({
		pager:false,
		speed:1600,
		keyboardEnabled:true
		
	});
	// smooth scrolling
	$(".links li a").click(function(){
		$('html , body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},1000);
	});
	// our auto slider
	(function autoslider (){
		$(".myslider .active").each(function(){
			if(!$(this).is(":last-child")){
				$(this).delay(2000).fadeOut(1000,function(){
					$(this).removeClass('active');
					$(this).next().fadeIn(1000).addClass('active');
					autoslider ();
				});
			}
			else
				{
					$(this).delay(3000).fadeOut(1000,function(){
						$(this).removeClass('active');
						$('.myslider div').eq(0).fadeIn(1000).addClass('active');
						autoslider();
					});
				}
			
		});
	}());
	
})
//Trigger mixitup
$('#Container').mixItUp();
$(".shuffle li").click(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
});

$(".shuffle li").click(function(){
	if($('.shuffle .fix').hasClass('selected'))
	{
		$('.fixing').css("margin-left","20px");
	}
	else
		{
			$('.fixing').css("margin-left","0");
		}
});
//Trigger nice scroll

$("body").niceScroll({
	cursorcolor:"#1abc9c",
	cursorwidth:'10px',
	cursorborder:'1px solid #1abc9c'
	
});



