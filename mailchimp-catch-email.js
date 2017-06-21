// When users can't find the confirmation email sent from mailchimp
// At least capture the email via a google analytics event, or it'll be lost.

$("button#mc-embedded-subscribe").on('click', function(){
	var inputVal = $(this).closest('form').find('input.email').val();
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Email',
	  eventAction: 'Mailchimp Submit',
	  eventLabel: inputVal
	});
});
