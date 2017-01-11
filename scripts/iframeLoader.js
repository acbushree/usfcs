$(document).ready(function() {

	var iframe = $('div.iframe-block>iframe');

	// $('div.iframe-block>iframe').ready(alertText());

	iframe.on("load", function(){
	});

	var guestDomain = "usfca.edu";
	$(window).load(function() {

		var porthole = new Porthole.WindowProxy('https://' + guestDomain + '/porthole/proxy.html', 'iframe');

		console.log(iframe.content().find("h3").first().text());

	});

});

// test
function alertText(target) {
	alert(target.text());
}

// get the target's container height &
//   top-offset below the target
function getViewField(targetBelow) {

}

// write 
function writeStyles(scrollTop, height) {
	var styleTag;
	// if body.contains(style-tag) {
		styleTag = $('style').first();
	// else {
		$('header').append("<style><style>");
		styleTag = $("style");
	
}