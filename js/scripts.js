// toggle
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
});
//hoover
$(document).ready(function() {
$("#macus1").hover(
    function() {
      $("#work1").show();
    },
    function() {
      $("#work1").hide();
    }
  );
  $("#macus2").hover(
    function() {
      $("#work2").show();
    },
    function() {
      $("#work2").hide();
    }
  );
  $("#macus3").hover(
    function() {
      $("#work3").show();
    },
    function() {
      $("#work3").hide();
    }
  );
  $("#macus4").hover(
    function() {
      $("#work4").show();
    },
    function() {
      $("#work4").hide();
    }
  );
  $("#macus5").hover(
    function() {
      $("#work5").show();
    },
    function() {
      $("#work5").hide();
    }
  );
  $("#macus6").hover(
    function() {
      $("#work6").show();
    },
    function() {
      $("#work6").hide();
    }
  );
  $("#macus7").hover(
    function() {
      $("#work7").show();
    },
    function() {
      $("#work7").hide();
    }
  );
  $("#macus8").hover(
    function() {
      $("#work8").show();
    },
    function() {
      $("#work8").hide();
    }
);
});


function submitdetails() {

                    var name = document.getElementById("name").value;
                    var email = document.getElementById("email").value;
                    var text = document.getElementById("text").value;
                    var key="daef0317ab6011353ff9c48d377b1366-us4"
                
                    if (name === "") {
                        alert("Inserted your name");
                        return false;
                
                    } else if (email === "") {
                        alert("Insert your email!");
                        return false;
                
                    } else if (text === "") {
                
                        alert("Please fill this field");
                    } else {
                
                        alert("We have recieved your message " + name + ".we'll get back to you in the next couple of time.");
                
                
                    };
                }
    $(".portal").portal(function(){
        $(this).find(".explanation").hover("explanation_show");
    });

