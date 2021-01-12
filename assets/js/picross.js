$(document).ready( function() {
    $("td").click(function(e) {
        if (e.target.classList.contains("active")) {
            $(this).removeClass("active");
        } 
        else {
            $(this).addClass("active");
        }
    });
});