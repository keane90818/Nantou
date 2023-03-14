

$(document).ready(function(){  

    $(".headerPage").load("header.html");
    $(".footerPage").load("footer.html");
    $(".modalPage").load("modal.html");
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
    $('#modalBtn1').click().hide();


    // 點擊modal按鈕觸發動畫
    $('#modalBtn').click(function(){
        const b = document.getElementById('b');
        b.classList.add('main-first-title');

        const topImg = document.getElementById('topImg');
        topImg.classList.add('animate__animated');
        topImg.classList.add('animate__backInLeft'); 

        const topicA = document.getElementById('topicA');
        topicA.classList.add('animate__animated');
        topicA.classList.add('animate__tada'); 
    });
// scroll的操作
    let boxes = document.querySelectorAll(".box");
    const topics1 = document.querySelectorAll(".topic1");
    window.addEventListener("scroll", function(){
        checkBoxes();
        topics();
    });
    checkBoxes();
    topics();
    function topics(){
        let triggerBottom = window.innerHeight * 0.8;
        topics1.forEach((topic1) => {
            let boxTop = topic1.getBoundingClientRect().top;
            console.log(boxTop);
            if (boxTop < triggerBottom) {
              topic1.classList.add("animate__animated");
              topic1.classList.add("animate__fadeInUp");
            } else {
              topic1.classList.remove("animate__animated");
              topic1.classList.remove("animate__fadeInUp");
            }
          });
    }
    function checkBoxes() {
      
      
      let triggerBottom = window.innerHeight * 0.8;
      
      boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    };
   //酒甕的特效2
   var myButton2 = document.getElementById("beerDiv2");
    myButton2.addEventListener("click", function() {
  // 在這裡添加點擊按鈕後要執行的代碼
  console.log('111');
  $('#modalBtn2').click().hide();

    }   );
    //酒甕的特效3
   var myButton3 = document.getElementById("beerDiv3");
   myButton3.addEventListener("click", function() {
 // 在這裡添加點擊按鈕後要執行的代碼
 console.log('222');
 $('#modalBtn3').click().hide();

   }   );
   //酒甕的特效4
   var myButton4 = document.getElementById("beerDiv4");
    myButton4.addEventListener("click", function() {
  // 在這裡添加點擊按鈕後要執行的代碼
  console.log('333');
  $('#modalBtn4').click().hide();

    }   );
  });






