$('#hamburger-menu').click(function() {
  $(this).toggleClass('open').siblings('ul').slideToggle();
});
