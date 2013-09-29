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