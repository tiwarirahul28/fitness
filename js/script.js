$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');
    });


    $(window).scroll(function(){
      if($(window).scrollTop() >= 20){
        $('header').addClass('active');
      }else{
        $('header').removeClass('active');
      }
    });

  });