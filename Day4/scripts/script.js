$(function() {
	$("#btnGenerate").on("click", generate);

	function random(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

	function generate() {
		var $fields = $(".field-line");
		var fieldIndex = random(0, $fields.length);
		$($fields[fieldIndex]).append("<div class='zombie michael'></div>");
	};
});