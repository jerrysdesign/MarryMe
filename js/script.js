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
  $( '.show-modal' ).on( 'click', function(e) {
    $( '.modal' ).fadeIn();
    $( '.modal-background' ).fadeTo( 500, .5 );
    e.preventDefault();
  });
  $( '.modal-close' ).on( 'click', function(e) {
    $( '.modal, .modal-background' ).fadeOut();
    e.preventDefault();
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {$( '.modal, .modal-background' ).fadeOut();}   // esc
  });
});