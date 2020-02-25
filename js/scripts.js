$(document).ready(function () {
    $("#icon1").click(function () {
        $(this).toggle();
        $(".samie").show();
    });
    $(".samie").click(function () {
        $(this).hide();
        $("#icon1").show();
    });
    $("#icon2").click(function() {
        $(this).hide();
        $(".festo").show();
    })
    $(".festo").click(function(){
        $(this).toggle();
        $("#icon2").show();
    })
    $("#icon3").click(function () {
     $(this).toggle();
     $(".mitch").show();
    })
    $(".mitch").click(function(){
        $(this).toggle();
        $("#icon3").show();
    })
    $('.zero').hover(function () {
        $('#ze').toggle();
    });
})