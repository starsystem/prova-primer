// CLOSE ALERTS
var flashClose = document.querySelectorAll('.js-flash-close');

// Loop
for(i=0 ; i<flashClose.length ; i++){
	flashClose[i].addEventListener("click", function (e) {
		var flash = e.target.parentNode;
		flash.parentNode.removeChild(flash);
	}, false);
}
