$(document).ready(function(){  
    $(".headerPage").load("header.html");
    $(".footerPage").load("footer.html");
    
    $(".search-button").click(function(){
    $("input").slideToggle();
    });
    $(window).scroll(function(){
        //var $(window).scrollTop(); 為 scroll
        var scroll = $(window).scrollTop();
        if( scroll >= 70){
            // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
            $(".goTopButton").fadeIn();
        }
        else{
            $(".goTopButton").fadeOut();   
        }
        });
    // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
    $('.goTopButton').click(function(){
        $('html,body').animate({
            scrollTop:$('html').offset().top
        })
        return false;
    });
    $('.nav-logo').click(function(){
        $('html,body').animate({
            scrollTop:$('html').offset().top
        })
        return false;
    });
  });






