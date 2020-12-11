$(document).ready(function(){
  /* scroo to top button---------*/
  $(window).scroll(function(){
    if($(window).scrollTop() >=1200){
        if($(".fa.fa-chevron-up").is(':hidden')){
            $(".fa.fa-chevron-up").fadeIn(400);
        }
    }else{$(".fa.fa-chevron-up").fadeOut(400);
        
    }
  });
  $(".fa.fa-chevron-up").click(function(){

    $("html,body").animate({
    scrollTop:'0px'
    },2000);
  });
});