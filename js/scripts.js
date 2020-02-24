$(document).ready(function () {
    $("#design").click(function () {
        $(".design-icon").toggle();
        $(".design%p").toggle();
    });
    $("#dev").click(function () {
        $(".dev-icon").toggle();
        $(".dev%p").toggle();
    });
    $("#pm").click(function () {
        $(".pm-icon").toggle();
        $(".pm%P").toggle();
    });
    $("#row1").hover(function () {
        $(".portfolio1").css({"opacity": "0.2", "transition": "2s"});
        $("#text1").show();

    }, function () {
        $(".portfolio1").css("opacity", "1");
        $("#text1").show();
    });
    $("#row2").hover(function () {
        $(".portfolio2").css({"opacity": "0.2", "transition": "2s"});
        $("#text2").show();

    }, function () {
        $(".portfolio2").css("opacity", "1");
        $("#text2").show();
    });
    $("#row3").hover(function () {
        $(".portfolio3").css({"opacity": "0.2", "transition": "2s"});
        $("#text3").show();

    }, function () {
        $(".portfolio3").css("opacity", "1");
        $("#text3").show();
    });
    $("#row4").hover(function () {
        $(".portfolio4").css({"opacity": "0.2", "transition": "2s"});
        $("#text4").show();

    }, function () {
        $(".portfolio4").css("opacity", "1");
        $("#text4").show();
    });
    $("#row5").hover(function () {
        $(".portfolio5").css({"opacity": "0.2", "transition": "2s"});
        $("#text5").show();

    }, function () {
        $(".portfolio5").css("opacity", "1");
        $("#text5").show();
    });
    $("#row6").hover(function () {
        $(".portfolio6").css({"opacity": "0.2", "transition": "2s"});
        $("#text6").show();

    }, function () {
        $(".portfolio6").css("opacity", "1");
        $("#text6").show();
    });
    $("#row7").hover(function () {
        $(".portfolio7").css({"opacity": "0.2", "transition": "2s"});
        $("#text7").show();

    }, function () {
        $(".portfolio7").css("opacity", "1");
        $("#text7").show();
    });
    $("#row8").hover(function () {
        $(".portfolio8").css({"opacity": "0.2", "transition": "s"});
        $("#text8").show();

    }, function () {
        $(".portfolio8").css("opacity", "1");
        $("#text8").show();
    });

});