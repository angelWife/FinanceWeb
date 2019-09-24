$(function(){
  $("#head-nav li").hover(function(){
    var childNavBox = $(this).find(".childNavBox");
    if(childNavBox.length>0){
      $(this).addClass("active").siblings().removeClass("active");
      $(childNavBox).stop().fadeIn();
    }
  },function(){
    var childNavBox = $(this).find(".childNavBox");
    if(childNavBox.length>0){
      $(this).removeClass("active");
      $(childNavBox).stop().fadeOut();
    }
  });
});