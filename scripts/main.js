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
	
	/* Параллакс
	
	*/
	$('.b_bnn10').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn13').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn16').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn1').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn2').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn15').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn7').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn9').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	$('.b_bnn6').scrollingParallax({staticSpeed : 1.1,staticScrollLimit : false});
	
	$('.b_bnn8').scrollingParallax({staticSpeed : 1.3,staticScrollLimit : false});
	
	$('.b_bnn4').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	$('.b_bnn5').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	$('.b_bnn11').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	$('.b_bnn12').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	$('.b_bnn14').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	$('.b_bnn3').scrollingParallax({staticSpeed : 1.5,staticScrollLimit : false});
	
	/* Предварительная загрузка изображений
	
	*/
	var cache = [];

	$.extend({
	preLoadImages: function()
	{
		var args_len = arguments.length;

		for (var i = args_len; i--;)
		{
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	}
	});

	$.preLoadImages(
		"images/hero/hero_pos1.png",
		"images/hero/hero_pos2.png",
		"images/hero/hero_pos3.png",
		"images/hero/hero_pos4.png",
		"images/hero/hero_pos5.png",
		"images/hero/hero_pos6.png",
		"images/hero/hero_pos7.png",
		"images/hero/hero_pos8.png",
		"images/hero/hero_pos9.png"
	);
	
	/* Клик на Гоше
	
	*/
	var num = 2;
	$('#topslide_click_point').click(function(){
		if( num > 0 ){
			if( num >= 10 ){
				num = 1;
				$(this).attr('class','');
			}
			$('.b_topslide_talk p.active').removeClass('active').fadeOut().next().fadeIn().addClass('active');
			$(this).addClass('hero_pos'+num);
			$('.b_topslide_talk p:last').after($('.b_topslide_talk p:first')); 
		}
		num++;
		return false;
	});
	
	/* Карта Яндекса
	
	*/
	ymaps.ready(init);
		var myMap,
			myPlacemark;

		function init(){     
			myMap = new ymaps.Map ("b_midslide_box__map", {
				center: [55.767890, 38.162426],
				zoom: 10,
			});

			myMap.controls
                // Кнопка изменения масштаба
                .add('zoomControl')
                // Список типов карты
                .add('typeSelector')
                // Стандартный набор кнопок
                .add('mapTools');

            // Также в метод add можно передать экземпляр класса, реализующего определенный элемент управления.
            // Например, линейка масштаба ('scaleLine')
            myMap.controls
                .add(new ymaps.control.ScaleLine())
			
			myPlacemark1 = new ymaps.Placemark([55.655935, 37.541494], {
                    balloonContent: 'М.Калужская, Профсоюзная 61А (ТЦ «Калужский»)'
                }, {
                    iconImageHref: 'images/yamap_ico.png', // картинка иконки
                    iconImageSize: [30, 53], // размеры картинки
                });

			myMap.geoObjects.add(myPlacemark1);
			
			myPlacemark2 = new ymaps.Placemark([55.863858, 37.545752], {
                    balloonContent: 'М. Петровско-Разумовская, Дмитровское шоссе, 89 (ТЦ XL)'
                }, {
                    iconImageHref: 'images/yamap_ico.png', // картинка иконки
                    iconImageSize: [30, 53], // размеры картинки
                });

			myMap.geoObjects.add(myPlacemark2);
			
			myPlacemark3 = new ymaps.Placemark([55.808128, 37.510709], {
                    balloonContent: 'м. "Сходненская" ТЦ Калейдоскоп ул. Сходненская, д. 56'
                }, {
                    iconImageHref: 'images/yamap_ico.png', // картинка иконки
                    iconImageSize: [30, 53], // размеры картинки
                });

			myMap.geoObjects.add(myPlacemark3);
		}
	
	/* Табы видео
	
	*/
	$('.b_botslide_video__tabs a').tabs();
	
	/* Скролл вверх
	
	*/
	$('.b_botslide_video__goup a').click(function(){
		$('html, body').stop().animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
	/* Всплывашка правил
	
	
	$('.b_ask > a').fancybox({
	'titleShow' : false,
	'transitionIn' : 'none',
	'transitionOut' : 'none',
    padding:0,
	fitToView:false,
    beforeShow : function() {
      $('.fancybox-overlay').addClass('form-overlay');
    }
	});*/
	$(".popup_window").fancybox({
		'titleShow'		: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		fitToView:false,
		padding:0,
		beforeShow : function() {
		  $('.fancybox-overlay').addClass('form-overlay');
		}
	});
	$(".i_wnd_about_cls").click(function(){$.fancybox.close();});

	/* Шэринг

	*/
	var share = function(type) {
        var site_url = encodeURI('http://banana-ecuador.ru'),
            title = encodeURI('Я хочу в Эквадорр! '),
            image = site_url + '/images/social.jpg',
            description = encodeURI('Поехали со мной в банановый рай! Ешь бананы, участвуй в акции,  выиграй путешествие! Клик-клик!'),
            url;

        if(type == '#vk') {
            url = 'http://vk.com/share.php?' + 'url=' + site_url + '&title=' + title + '&description=' + description + '&image=' + image;
        }
        else if(type == '#fb') {
            url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + description + '&p[url]=' + site_url + '&p[images][0]=' + image;
        }
        else if(type == '#ok') {
            url = 'http://odnoklassniki.ru/dk?st.cmd=addShare&' + '&st._surl=' + site_url;
        }
        else if(type == '#tw') {
            url = 'https://twitter.com/share?' + 'url=' + site_url + '&title=' + title + '&text=' + description;
        }

        var shareWindow = window.open(url,'displayWindow', 'width=700,height=600,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
        var timer = setInterval(checkChild, 500);

        function checkChild() {
		    if (shareWindow.closed) {
				$('#topslide_click_point').fadeOut();
				$('#olusha').fadeIn();
		        $('#olusha')[0].play();
		        clearInterval(timer);
		    }
		}
    }

    $('#olusha')[0].addEventListener('ended',function(){
		$('#olusha').fadeOut();
		$('#topslide_click_point').fadeIn();
    });

    $('.b_topslide_meet__socnet a').click(function(){
    	share($(this).attr('href'));
    }); 

	/* Корректировка позиций бананов для больших/малых мониторов

	*/
	var win_width = $(window).width();
		
	if ( win_width >= 1600 ){
		$('.b_prlx_bg img').each(function(){
			var img_width = parseInt($(this).css('left'));
			$(this).css('left',img_width+200);
		})
	}
	if ( win_width <= 1300 ){
		$('.b_prlx_bg img').each(function(){
			var img_width = parseInt($(this).css('left'));
			$(this).css('left',img_width-200);
		})
	}
});