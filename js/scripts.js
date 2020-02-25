$(document).ready(function () {
    $("#design").click(function () {
        $(".design-icon").toggle();
        $(".design").toggle();
    });
    $("#dev").click(function () {
        $(".dev-icon").toggle();
        $(".dev").toggle();
    });
    $("#pm").click(function() {
        $(".pm-icon").toggle();
        $(".product").toggle();
    });
    $(".portal").portal(function(){
        $(this).find(".explanation").hover("explanation_show");
    });
});
