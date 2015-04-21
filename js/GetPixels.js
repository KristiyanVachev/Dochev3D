function SetHeight() {
    var $height = $(window).height() - 60; //getting the screen height, without the 60px reserverd for the navigation

    $(".slide").css("height", $height); //setting the height of the slide

    for (var i = 1; i <= 4; i++) {

        var $ctnHeight = $("#content" + i).height(); //getting the height of the content

        if ($ctnHeight < $height) {
            var $paddng = ($height - $ctnHeight) / 2; //calculating the margin needed
            $("#content" + i).css("margin-top", $paddng);
        }
        else {
            $(".slide").css("height", $ctnHeight + 60);
        }
    }

}

//$(window).on('resize', function (e) {
//    SetHeight();
//});

SetHeight();