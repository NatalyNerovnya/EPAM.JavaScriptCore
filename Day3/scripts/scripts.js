$(function () {

    $(".button.generate").on("click", generate);
    $(".button.set-color").on("click", setColor);
    $(".button.reset").on("click", reset);

    function random(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    //make button with class="classSelector" unachievable (red border, default cursore, no action on click)
    function setAsUnworked(classSelector) {
        $(".button." + classSelector).addClass("unworkedClass")
    }

    function generate() {
    	//check whether the field is empty
        if (!$(".button.generate").hasClass("unworkedClass")) {
            var $field = $(".field");
            for (var i = 0; i < 50; i++) {
                $field.append('<div class="box">' + random(1, 100) + '</div>');
            }
            //enable clicking on reset button 
            $(".reset").removeClass("unworkedClass");
            //unenable clicking on generate button
            $(".generate").addClass("unworkedClass");
        }
    }

    function setColor() {
        //check whether the boxes are generated and not colored
         if ($(".button.generate").hasClass("unworkedClass") && !$(".button.set-color").hasClass("unworkedClass")) {
             $.each($(".box"), function (){
                
                var $this = $(this);
                if (+$this.text() > 75) {
                    $this.addClass("red");
                }
                else if (+$this.text() > 50 && +$this.text() <= 75) {
                    $this.addClass("orange");
                }
                else if (+$this.text() > 25 && +$this.text() <= 50) {
                    $this.addClass("green");
                }

                //unenable clicking on set-color button 
            $(".set-color").addClass("unworkedClass");
             });
            
         }
    }

    function reset() {
    	//check whether the field is full of boxes
        if ($(".button.generate").hasClass("unworkedClass")) {
            $(".box").remove();
            $(".generate").removeClass("unworkedClass");
            $(".set-color").removeClass("unworkedClass");
            $(".reset").addClass("unworkedClass");
        }
    }
});
