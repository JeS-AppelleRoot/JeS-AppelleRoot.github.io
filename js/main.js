jQuery(document).ready(function( $ ) {

  $('.countdown').each(function() {
    $(this).countdown({
    //    until: new Date($(this).attr('data-date'))
      until: (86400)+7320-240-3600
  });
  });

});
