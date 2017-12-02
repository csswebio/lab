$(document).ready(function() {



  // 設計  事件: 加class 漢堡menu
  $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
  // 漢堡menu End


  // 設計 事件: gotop 動畫 1秒 回最上層
  $(".gotop").click(function(){
      jQuery("html,body").animate({
          scrollTop: 0
      }, 1000);
  });
  // gotop End



  // 設計 事件: scroll滾動軸 高度 > 100 顯示 gotop
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 100){
          $('.gotop').fadeIn("fast");
      } else {
          $('.gotop').stop().fadeOut("fast");
      }
  });
  // scroll滾動軸 End



});
