$(document).ready(function() {
var result = 1;

    $(".dark").click(function() {
        if (result == 1) {
                $(this).addClass("active");
                result = 2;
        } else {
                $(this).removeClass("active");
                result = 1;
        }
    });
    $(".light").click(function() {
        if (result == 1) {
                $(this).addClass("active");
                result = 2;
        } else {
                $(this).removeClass("active");
                result = 1;
        }
    });
}); 