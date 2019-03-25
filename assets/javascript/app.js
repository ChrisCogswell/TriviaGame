$(document).ready(function() {

    var myTrivia = [
    {
        question: "Which one of these is NOT a Star Wars character?",
        answers: {
            a: "Darth Vader",
            b: "Spock",
            c: "Luke Skywalker",
            d: "Yoda"
        }, 
        correctAnswer: "b",
        image: "./images/spock.gif"
    },
    {  
        question: "Who played The Joker in Tim Burton's 'Batman'?",
        answers: {
            a: "Jack Palance",
            b: "Jared Leto",
            c: "Harvey Keitel",
            d: "Jack Nicholson"
        },
        correctAnswer: "d",
        image: "./images/joker.gif"
    }, 
    {  
        question: "Which of these films was NOT directed by Quentin Tarantino?",
        answers: {
            a: "Pulp Fiction",
            b: "Kill Bill",
            c: "Goodfellas",
            d: "Resevoir Dogs"
        },
        correctAnswer: "c",
        image: "./images/goodfellas.gif"
    },
    {  
        question: "In 'Back to the Future', how much electricity is needed to power the time machine?",
        answers: {
            a: "1.21 gigawatts",
            b: "121 megawatts",
            c: "21 terawatts",
            d: "1,021 watts"
        },
        correctAnswer: "1.21 gigawatts",
        image: "./images/gigawatt.gif"
    },
    {   
        question: "T. E. Lawrence is the main character in the 1963 Oscar winner 'Lawrence of (what)?'",
        answers: {
            a: "Australia",
            b: "Bulgaria",
            c: "Arabia",
            d: "America"
        },
        correctAnswer: "c",
        image: "./images/arabia.gif"
    },
    {
        question: "Neo, Morpheus, and Trinity are all characters from which film?",
        answers: {
            a: "Inception",
            b: "The Matrix",
            c: "Blade Runner",
            d: "Ex Machina"
        },
        correctAnswer: "b",
        image: "./images/Neo.gif"
    }
    ];
    
    
    var number = 60;
    
    var intervalId;
    
    function run(){
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        quizMain();
    }
    
    function decrement(){
        number--;
        if (number === 0){
            number = 20;
        }
        $("#timer").html("Time Remaining: " + number);
    }
    
    function quizMain() {
        var output = [];

       
        myTrivia.forEach((currentQuestion, questionNumber) => {
         
          var answers = [];
    
          for (letter in currentQuestion.answers) {
           
            answers.push(
              `<label>
                 <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
               </label>`
            );
          }

           output.push(
            `<div class="slide">
               <div class="question"> ${currentQuestion.question} </div>
               <div class="answers"> ${answers.join("  ")} </div>
             </div>`
           );
           });

           quizContainer.innerHTML = output.join("");
       }
       
       function quizResults() {

        var numberCorrect = 0;



       }


       var quizContainer = $("#quiz")[0];
       
    
    //   This section hides my submit button 
       
      $("#submit").hide();
      
    //   This section starts my game and shows submit button

      $("#start").on("click", function(){
          $("#start").hide();
          $("#submit").show();
          run();
        });
    });
    
    
    
    
    
    