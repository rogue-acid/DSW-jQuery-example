$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("p").hide();
		$("img").addClass("border");
	});
	$("p").hover(function(){
		$(this).css("background-color", "yellow");
	}, function(){
		$(this).css("background-color", "lightblue");
	});

});
