$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
	// check if user pressed enter
	if (e.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + text + "</li>");
	}
})