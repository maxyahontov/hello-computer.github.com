$(function(){
	/* Добавление класса body, в зависимости от браузера
	
	*/
	if($.browser.msie && $.browser.version == 6) $("body").addClass("ie6");
	if($.browser.msie && $.browser.version == 7) $("body").addClass("ie7");
	if($.browser.msie && $.browser.version == 8) $("body").addClass("ie8");
	if($.browser.msie && $.browser.version == 9) $("body").addClass("ie9");
	if($.browser.msie && $.browser.version == 10) $("body").addClass("ie10");
	if($.browser.opera) $("body").addClass("opera");
	if($.browser.mozilla) $("body").addClass("ffox");
	if($.browser.chrome) $("body").addClass("chrome");
	if($.browser.iphone) $("body").addClass("iphone");
	if($.browser.ipad) $("body").addClass("ipad");
	if($.browser.ipod) $("body").addClass("ipod");
	
	/* Клик на Гоше
	
	*/
	$('#topslide_click_point').click(function(){
		$('.b_topslide_talk p.active').removeClass('active').fadeOut().next().fadeIn().addClass('active');
		$('.b_topslide_talk p:last').after($('.b_topslide_talk p:first')); 
		return false;
	});
	
	/* Табы видео
	
	*/
	$('.b_botslide_video__tabs a').tabs();
	
	/* Скролл вверх
	
	*/
	$('.b_botslide_video__goup a').click(function(){
		$('html, body').stop().animate({ scrollTop: 0 }, 1000);
		return false;
	});	
});