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

	/* Шэринг

	*/

	var share = function(type) {
        var site_url = encodeURI('http://banana-ecuador.ru'),
            title = encodeURI('Я хочу в Эквадорр! '),
            image = site_url + '/images/social.jpg',
            description = encodeURI('Поехали со мной в банановый рай! Ешь бананы, участвуй в акции,  выиграй путешествие! Клик-клик!'),
            url;

            console.log(image);

        if(type == '#vk') {
            url = 'http://vk.com/share.php?' + 'url=' + site_url + '&title=' + title + '&description=' + description + '&image=' + image;
        }
        else if(type == '#fb') {
            url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + description + '&p[url]=' + site_url + '&p[images][0]=' + image;
        }
        else if(type == '#ok') {
            url = 'http://odnoklassniki.ru/dk?st.cmd=addShare&' + '&st._surl=' + site_url;
        }
        else if(type == '#ml') {
            url = 'http://connect.mail.ru/share?' + 'url=' + site_url + '&title=' + title + '&description=' + description + '&imageurl=' + image;
        }

        window.open(url,'displayWindow', 'width=700,height=600,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
    }

    $('.b_topslide_meet__socnet a').click(function(){
    	share($(this).attr('href'));
    }); 
});