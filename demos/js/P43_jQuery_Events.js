$(document).ready(function() {

	$('#switcher-default').addClass('selected').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').removeClass('large');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#switcher-narrow').bind('click', function() {
		$('body').addClass('narrow');
		$('body').removeClass('large');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#switcher-large').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').addClass('large');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});

	var triggers = {
		D : 'default',
		N : 'narrow',
		L : 'large'
	};

	$(document).keyup(function(event) {
		var key = String.fromCharCode(event.keyCode);
		if( key in triggers) {
			$('#switcher-' + triggers[key]).click();
		} else {
		  console.log("Key " + key + " has no effect.")
		}
	});

}); 