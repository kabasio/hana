console.log("hi");


$(window).on('load',function(){
    $('h1').addClass('showUp');
    $('h2').addClass('showUp');
    $('.mainp').addClass('showUp');
});


  $(window).on('load',function(){

	// fade-up
    $(window).scroll(function (){
        $('.fade-up').each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).css({
                        'opacity':'1',
                        'transform':'translateY(0)',
                        '-webkit-transform':'translateY(0)',
                        '-moz-transform':'translateY(0)',
                        '-ms-transform':'translateY(0)'
                });
            } else {
                $(this).css({
                        'opacity':'0',
                        'transform':'translateY(120px)',
                        '-webkit-transform':'translateY(120px)',
                        '-moz-transform':'translateY(120px)',
                        '-ms-transform':'translateY(120px)'
                });
            }
        });
    });
});

$(window).on('load',function(){
	// fade-in
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/5){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});

//アンカーするする
$(function(){
    03
        $('a[href^=#]').click(function(){
    04
            var speed = 800;
    05
            var href= $(this).attr("href");
    06
            var target = $(href == "#" || href == "" ? 'html' : href);
    07
            var position = target.offset().top;
    08
            $("html, body").animate({scrollTop:position}, speed, "swing");
    09
            return false;
    10
        });
    11
    });
    