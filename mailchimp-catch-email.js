// I've had some emails come in saying they couldn't find the confirmation email sent from mailchimp, so am capturing them via a google analytics event.

$("button#mc-embedded-subscribe").on('click', function(){
	var inputVal = $(this).closest('form').find('input.email').val();
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Email',
	  eventAction: 'Mailchimp Submit',
	  eventLabel: inputVal
	});
});
