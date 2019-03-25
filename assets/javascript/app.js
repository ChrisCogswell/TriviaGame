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
    }
    ];
    
    
    var number = 20;
    
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
        $("#timer").html(number);
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
               <div class="answers"> ${answers.join("")} </div>
             </div>`
           );
           });

           quizContainer.innerHTML = output.join("");
       }
       var quizContainer = document.getElementById("quiz");
    
    
    
    
      
      $("#start").on("click", function(){
          $("#start").hide();
          run();
        });
    });
    
    
    
    
    
    