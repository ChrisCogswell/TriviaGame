$(document).ready(function(){

var questions = [{
    question: "Which one of these is NOT a Star Wars character?",
    answers: ["Darth Vader", "Spock", "Luke Skywalker", "Yoda"], 
    correctAnswer: "Spock",
    image: "./images/spock.gif"
},
{   question: "Who played The Joker in Tim Burton's 'Batman'?",
    answers: ["Jack Palance", "Jared Leto", "Harvey Keitel", "Jack Nicholson"],
    correctAnswer: "Jack Nicholson",
    image: "./images/joker.gif"
}, 
{   question: "Which of these films was NOT directed by Quentin Tarantino?",
    answers: ["Pulp Fiction", "Kill Bill", "Goodfellas", "Resevoir Dogs"],
    correctAnswer: "Goodfellas",
    image: "./images/goodfellas.gif"
},
{   question: "In 'Back to the Future', how much electricity is needed to power the time machine?",
    answers: ["1.21 gigawatts", "121 megawatts", "21 terawatts", "1,021 watts"],
    correctAnswer: "1.21 gigawatts",
    image: "./images/gigawatt.gif"
},
{   question: "T. E. Lawrence is the main character in the 1963 Oscar winner 'Lawrence of (what)?'",
    answers: ["Australia", "Bulgaria", "Arabia", "America"],
    correctAnswer: "Arabia",
    image: "./images/arabia.gif"

}];




var number = 100;

var intervalId;

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $("#quiz").html(number);
}

$("#start").on("click", function(){

});
});






























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


  