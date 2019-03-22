
var number = 100;

var intervalId;

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $("#empty-div").html("<h1>" + number + "</h1>");
}

run();





























// alert("hello");

// var newDiv = $("<div>");

// newDiv.text("Whats up");

// $("#empty-div").append(newDiv);

// setTimeout(fiveSeconds, 500 * 5);
// setTimeout(fourSeconds, 500 * 6);
// setTimeout(threeSeconds, 500 * 7);
// setTimeout(twoSeconds, 500 * 8);
// setTimeout(oneSeconds, 500 * 9);
// setTimeout(noSeconds, 500 * 10);


// function fiveSeconds() {
//     $("#empty-div").append("<h1>Five Seconds!</h1>");
//     $("body").css({"background-color": "blue"});
// }
// function fourSeconds() {
//     $("#empty-div").append("<h1>Four Seconds!</h1>");
//     $("body").css({"background-color": "green"});
// }
// function threeSeconds() {
//     $("#empty-div").append("<h1>Three Seconds!</h1>");
//     $("body").css({"background-color": "yellow"});
// }
// function twoSeconds() {
//     $("#empty-div").append("<h1>Two Seconds!</h1>");
//     $("body").css({"background-color": "brown"});

// }
// function oneSeconds() {
//     $("#empty-div").append("<h1>One Seconds!</h1>");
//     $("body").css({"background-color": "orange"});

// }
// function noSeconds() {
//     $("#empty-div").append("<h1>Boom!</h1>");
//     $("body").css({"background-color": "Red"});

// }


  