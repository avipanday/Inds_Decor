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