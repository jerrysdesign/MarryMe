
$(function(){
  //var tooltip = $( '.share-to-tooltip' );
  var tooltip = $( '<div class="share-to-tooltip">分享到 Share To...<ul><li><a href="javascript:;"><img src="images/share2fb.png" alt="share to facebook"></a></li><li><a href="javascript:;"><img src="images/share2email.png" alt="share to E-mail"></a></li></ul></div>' ).appendTo('body')[0];

  $( '.share-to' ).each(function () {
    // var pos = $( '.share-to' ).position(),
    //     top = pos.top,
    //     right = pos.right;

    $( this ).click(function ( e ) {

      $( tooltip ).css({
        left: e.clientX+25,
        top: e.clientY-20
      }).show().mouseleave(function () {
        $( tooltip ).hide();
      });
    });
  });
});
$(function(){
  var d = new Date(),
  currentMonth = d.getMonth()+2, // get next month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['一月 January','二月 February','三月 March','四月 April','五月 May','六月 June','八月 July','九月 August','十月 September','十一月 October','十二月 November','December']; // month names

  $('.calendar p').html(
      '<span class="prev">&lsaquo;</span>'+
      months[currentMonth-1] +// add month name to calendar'+
      '<span class="next">&rsaquo;</span>');
      

  for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
    $('<li>&nbsp;</li>').appendTo('.calendar ul');
  }

  for (var i = 1;i<=days;i++) { // write out the days
    $('<li>'+i+'</li>').appendTo('.calendar ul');
  }

  $('.calendar li').click(function(){ // toggle selected dates
    $(this).toggleClass('active');
  });

  function firstDay(month,year) {
    return new Date(year,month,1).getDay();
  }

  function numDays(month,year) {
    return new Date(year,month,0).getDate();
  }

});

$(function(){
  // tabbed content
  $(".tab_content").hide();
  $(".tab_content:first").show();

  /* if in tab mode */
  $("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

  });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#"+d_activeTab).fadeIn();

  $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });


  /* Extra class "tab_last" 
   to add border to right side
   of last tab */
  $('ul.tabs li').last().addClass("tab_last");
});

$(function(){
  //Quick view 
  //var idN = $(this).attr('id');
  $('.show-modal').on('click', function(e) {
    $('#quickview .modal').fadeIn();
    $('.modal-background').fadeTo( 300 , 0.8);
    $('.wrapper').addClass('avgrund-active');
    $('body').append($('#quickview'));
    e.preventDefault();
  });

  $('#show-login-modal').on('click',function(e) {
    $('#login-modal .modal').fadeIn();
    $('.modal-background').fadeTo( 300 , 0.8 );
    $('.wrapper').addClass('avgrund-active');
    $('body').append($('#login-modal'));
    e.preventDefault();
  });
  $('#show-register-modal').on('click',function(e) {
    $('#reg-modal .modal').fadeIn();
    $('.modal-background').fadeTo( 300 , 0.8 );
    $('.wrapper').addClass('avgrund-active');
    $('body').append($('#reg-modal'));
    e.preventDefault();
  });
  $( '.modal-close' ).on( 'click', function(e) {
    $( '.modal, .modal-background' ).fadeOut();
    $( '.wrapper').removeClass('avgrund-active');
    e.preventDefault();
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $( '.modal, .modal-background' ).fadeOut();
      $( '.wrapper').removeClass('avgrund-active');
    }   // esc
  });
  // var windowH = $(window).innerHeight(),
  //      modalH = $('.modal').innerHeight();
  //   if (modalH < wh) {
  //     $('.modal').css({
  //        'top' : '50%',
  //        'margin-top' : -$(this).height()/2
  //     })
  //   }

  // $('.modal').css({
  //   'position' : 'absolute',
  //   'left' : '50%',
  //   'top' : '50%',
  //   'z-index' : '10'
  //   'margin-left' : -$(this).width()/2,
  //   'margin-top' : -$(this).height()/2
  // });
});

// $(function(){
//   $(".slider-photo li").eq(0).addClass("active");
//   $(".slider-photo li").click( function(){
//     NN = $(this).index();
//     $(".slider-photo li").animate({left:-=480},500);
//     $(this).addClass("active").siblings().removeClass();
//   });
// });

$(function(){
  var bannerWidth = $('.mediabannerlist li').length * 100;
  $('.mediabannerlist').width(bannerWidth);

  $('.scroller.right').mouseenter(function(){
    $('.slider-sub-inner').scrollTo(bannerWidth, 1200);
  });
  $('.scroller.left').mouseenter(function(){
    $('.slider-sub-inner').scrollTo(0, 1200);
  });
  $('.scroller').mouseleave(function(){
    $('.slider-sub-inner').stop();
  });
});

$(function($){
  var $slides = $('.viewport > .slides');
  var $slideNav = $('.slider-nav > div');
  var nextBtn = $('.slider-control .next');
  var prevBtn = $('.slider-control .prev');
  $slideNav.eq(0).addClass("active");
  
  $slideNav.each(function(e){
    $(this).click(function(){
      $slideNav.removeClass('active');
      $(this).addClass('active');
      setSlide($(this).attr('data-slide'));
    });
  });
  
  var currentSlide = 0,
      totalSlides = $slides.children().size();
    
  var setSlide = function(slide){
    var shift = slide * 100;
    currentSlide = slide;
    $slides.css({'left': '-'+shift+'%'});
  };
  
  nextBtn.click(function(){
    currentSlide = (currentSlide + 1) % totalSlides;
    setSlide(currentSlide);
  });

  prevBtn.click(function(){
    currentSlide -= 1;
    currentSlide = currentSlide < 0 ? totalSlides-1: currentSlide;
    setSlide(currentSlide);
  });
  
  setSlide(0);

});

$(function(){
  $('.mediabannerlist li').click( function(){
    var NN = $(this).index();
    $('.slider-photo li').removeClass('active');
    $('.slider-photo li').eq(NN).addClass('active');
  });
});

//Develop example
$('#show-2-4-modal').on( 'click', function(e){
  $('#require .modal').fadeIn();
  $('.modal-background').fadeTo( 300 , 0.9 );
  $('.wrapper').addClass('avgrund-active');
  $('body').append($('#require'));
  e.preventDefault();
});
$('.photo-list li a').on( 'click', function(e){
  $('#p2-2-6-1 .modal').fadeIn();
  $('.modal-background').fadeTo( 300 , 0.9 );
  $('.wrapper').addClass('avgrund-active');
  $('body').append($('#p2-2-6-1'));
  e.preventDefault();
});
  
// jqueryUI datepicker
$(function() {
  // Disable a range of dates
  var disabledDaysRange = [["8-9-2010 to 8-13-2013", "8-16-2013 to 8-19-2013", "8-22-2013 to 8-25-2013", '8-27-2013 to 8-27-2013']];
  function disableRangeOfDays(d){
    for(var i = 0; i < disabledDaysRange.length; i++){
      if($.isArray(disabledDaysRange[i])){
        for(var j = 0; j < disabledDaysRange[i].length; j++){
          var r = disabledDaysRange[i][j].split(" to ");
          r[0] = r[0].split("-");
          r[1] = r[1].split("-");
          if(new Date(r[0][2], (r[0][0]-1), r[0][1]) <= d && d <= new Date(r[1][2], (r[1][0]-1), r[1][1])){
            return [false];
          }
        }
      }
      else {
        if(((d.getMonth()+1) + '-' + d.getDate() + '-' + d.getFullYear()) == disabledDaysRange[i]){
          return [false];
        }
      }
    }
    return [true];
  }

  $('#datepicker1,#datepicker2').datepicker({
    dateFormat: 'mm-dd-yy',
    beforeShowDay: disableRangeOfDays
  });
});

// date(9.1)
$(function() {
  var weekdays = new Array();
      weekdays[0] = "星期天";
      weekdays[1] = "星期一";
      weekdays[2] = "星期二";
      weekdays[3] = "星期三";
      weekdays[4] = "星期四";
      weekdays[5] = "星期五";
      weekdays[6] = "星期六";
  // [0] = year, [1] = month, [2] = day
  var cal_date = $(".date").data("destination");
  var cal_date_arr = cal_date.split("-");
  var dest = new Date(cal_date_arr[0],
                      cal_date_arr[1],
                      cal_date_arr[2]);
  $(".date-y-m").text(dest.getFullYear() + "." + dest.getMonth());
  $(".date-dd").text(dest.getDate());
  $(".date-wd").text(weekdays[dest.getDay()]);
});
