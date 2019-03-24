$(document).ready(function() {

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

// var questionHTML = [];

// var answerHTML1 = [];

// var answerHTML2 = [];

var number = 20;

var intervalId;

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    gameStart();
}

function decrement(){
    number--;
    if (number === 0){
        number = 20;
    }
    $("#timer").html(number);
}

function gameStart() {
    var randomQuestion = questions[Math.floor(Math.random()*5)];
    $("#questionText").html(randomQuestion["question"]);
    $("#choiceText").html(randomQuestion["answers[0]"]);
    // userCoice();
  };

  function userCoice() {
    //   for (var i = 0; i < 3; i++){}
    var userChoices1 = questions[0].answers[0];
    var userChoices2 = questions[0].answers[1];
    var userChoices3 = questions[0].answers[2];
    var userChoices4 = questions[0].answers[3];
    $("#firstChoice").html("1: " + userChoices1);
    $("#secondChoice").html("2: " + userChoices2);
    $("#thirdChoice").html("3: " + userChoices3);
    $("#fourthChoice").html("4: " + userChoices4);
  };
  
  $("#start").on("click", function(){
      $("#start").hide();
      run();
    });
});



// var array = [...];
// var newHTML = [];
// $.each(array, function(index, value) {
    //     newHTML.push('<span>' + value + '</span>');
    // });
    
    
    
    
    // function gameStart(){
    
    //     questionHTML.push(questions[0].question);
    
    //     answerHTML1.push("1: " + questions[0].answers[0]);
    //     answerHTML2.push("2: " + questions[0].answers[1]);
     
     
    // $("#questionText").html(questionHTML.join(""));
    // $("#firstChoice").html(answerHTML1.join(""));
    // $("#secondChoice").html(answerHTML2.join(""));
    
    // };
    
    
    
// var array = [...];
// var newHTML = [];
// for (var i = 0; i < array.length; i++) {
//     newHTML.push('<span>' + array[i] + '</span>');
// }
// $(".element").html(newHTML.join(""));




















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


  