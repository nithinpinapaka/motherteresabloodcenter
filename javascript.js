// Shadow Effect in About Us Page For Cards
$(document).ready(function () {

  $(".shadow-effect").hover(function () {
    $(this).addClass('shadow-lg').css('cursor', 'pointer');
  }, function () {
    $(this).removeClass('shadow-lg');
  }
  );

  //  Hiding and Showing of  Scrolling Button in a Page.

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 300) {

      $('#back-to-top').show();                                                                                                                   
    } else {

      $('#back-to-top').hide();
    }
  });
 
  

});
