(function ($) {

$.fn.extend({
  selectMenu: function (o) {
    var $this = $(this),
        options = $.extend({
        placeholder: '<div class="menu-placeholder">',
        activeSelector: '.active'
      }, o);

    var $activeTry = $this.children( options.activeSelector ).first(),
        $active = $activeTry.length ? $activeTry : $this.children().first(),
        $placeholder = $( options.placeholder ).html( $active.clone().html() ),
      over = function () {
        var $item = $(this);
        $item.keydown(function (event) {
          if (event.keyCode === 27 && !event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
            $item.blur();
          }
        });

        $this.show();
      },
      out = function () { $this.hide(); };

    $placeholder.children(':first')
      .bind('mouseout blur', out)
      .bind('mouseover focus', over);

    $this.find('> li > *')
      .bind('mouseout blur', out)
      .bind('mouseover focus', over);

    $this
      .css('position', 'absolute')
      .before( $placeholder )
      .hide();

    return $this;
  }
});

})(jQuery);