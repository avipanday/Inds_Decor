var navbarStatus = 0;

function adjustCarousel() {
	if (navbarStatus == 0) {
		$("#c-left-control").css({ top: '267px'});
		$("#c-right-control").css({ top: '267px'});
		$("#ig-container").css({ "padding-top" : '217px'});
		navbarStatus++;
	} else {
		$("#c-left-control").css({ top: '50px'});
		$("#c-right-control").css({ top: '50px'});
		$("#ig-container").css({ "padding-top" : '0px'});
		navbarStatus--;
	}
}

jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
 
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});