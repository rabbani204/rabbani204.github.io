(function($) {
	$('.buttons button').on('click', function() {
	  $('.modal-background').addClass('show').removeClass('hide');
	  $('#'+$(this).data('modal')).addClass('show').removeClass('hide');
	});
	
	$('.modal-background').on('click', function(e) {
	  e.preventDefault();
	  $(this).removeClass('show').addClass('hide');
	  $('.modal.show').removeClass('show').addClass('hide');
	});
	
	$('.modal').on('click', function(e) {
	  e.preventDefault();
	});
  })(jQuery);