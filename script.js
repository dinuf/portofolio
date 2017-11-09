$( document ).ready(function() {
	$( ".wire" ).click(function() {
		$(this).parent().siblings(".spot").find(".w").css("opacity","1");
	});
	$( ".simple" ).click(function() {
		$(this).parent().siblings(".spot").find(".w").css("opacity","0");
		$(this).parent().siblings(".spot").find(".s").css("opacity","1");
	});
	$( ".render" ).click(function() {
		$(this).parent().siblings(".spot").find(".s, .w").css("opacity","0");
		$(this).parent().siblings(".spot").find(".r").css("opacity","1");
	});
});