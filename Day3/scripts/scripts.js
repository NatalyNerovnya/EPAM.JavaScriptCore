$(function () {

    $(".button.generate").on("click", generate);
    $(".button.set-color").on("click", setColor);
    $(".button.reset").on("click", reset);

    function random(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    //make button with class="classSelector" achievable (grey border, pointer cursore, action on click)
    function setAsWorked(classSelector) {
        $(".button." + classSelector).css("cursor", "pointer");
        $(".button." + classSelector).css("border-color", "#d9d9d9");
    }

    //make button with class="classSelector" unachievable (red border, default cursore, no action on click)
    function setAsUnworked(classSelector) {
        $(".button." + classSelector).css("cursor", "default");
        $(".button." + classSelector).css("border-color", "red");
    }

    function generate() {
    	//check whether the field is empty
        if ($(".button.generate").css("cursor") != "default") {
            var $field = $(".field");
            for (var i = 0; i < 50; i++) {
                $field.append('<div class="box" id="' + i + '">' + random(1, 100) + '</div>');
            }
            //enable clicking on reset button 
            setAsWorked("reset");
            //unenable clicking on generate button 
            setAsUnworked("generate");
        }
    }

    function setColor() {
        //check whether the boxes are generated and not colored
        if ($(".button.generate").css("cursor") == "default" && $(".button.set-color").css("cursor") != "default") {
            for (var i = 0; i < 50; i++) {
                var $box = $(".box#" + i);
                if (+$box.text() > 75) {
                    $box.css("background", "#f44336");
                }
                else if (+$box.text() > 50 && +$box.text() <= 75) {
                    $box.css("background", "#ff9800");
                }
                else if (+$box.text() > 25 && +$box.text() <= 50) {
                    $box.css("background", "#4caf50");
                }
            }
            //unenable clicking on set-color button 
            setAsUnworked("set-color");
        }
    }

    function reset() {
    	//check whether the field is full of boxes
        if ($(".button.generate").css("cursor") == "default") {
            $(".box").remove();
            setAsWorked("generate");
            setAsWorked("set-color");
            setAsUnworked("reset");
        }
    }
});
