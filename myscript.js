$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("p").hide();
		$("img").addClass("border");
	});
	$("h1").click(function(){
		$("h2, h3").toggleClass(hide());
	});
});
