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
});
function confirm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("message").value;

    if (name === "") {
        alert("Please fill in your name");
        return false;

    } else if (email === "") {
        alert("Please insert your email!");
        return false;

    } else if (text === "") {

        alert("There is no text to submit!");
    } else {

        alert("Thank you " + name + " we have received your message");
    };
}
