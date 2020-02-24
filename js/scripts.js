$(document).ready(function () {
    $("#design").click(function () {
        $(".design-icon").toggle();
        $(".design%p").toggle();
    });
    $(document)
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
        $("#work1").show();

    }, function () {
        $(".portfolio1").css("opacity", "1");
        $("#work1").show();
    });
    $("#row2").hover(function () {
        $(".portfolio2").css({"opacity": "0.2", "transition": "2s"});
        $("#work2").show();

    }, function () {
        $(".portfolio2").css("opacity", "1");
        $("#work2").show();
    });
    $("#row3").hover(function () {
        $(".portfolio3").css({"opacity": "0.2", "transition": "2s"});
        $("#work3").show();

    }, function () {
        $(".portfolio3").css("opacity", "1");
        $("#work3").show();
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
function confirm() {

    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var text = document.getElementById("Jot your message here").value;

    if (name === "") {
        alert("Please fill in your name");
        return false;

    } else if (email === "") {
        alert("Please insert your email!");
        return false;

    } else if (text === "") {

        alert("There is no text to submit!");
    } else {

        alert("We have recieved your message dear " + name + " and we will get back to you");


    };
}
