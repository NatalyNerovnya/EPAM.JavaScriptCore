
$(function() {

	function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

	function generate() {
	var $field = $(".field");
	for (var i = 0; i < 50; i++) {
		$field.append('<div class="box">'+ random(1,100) + '</div>');
	}

}

$(".button").on("click", generate);

});