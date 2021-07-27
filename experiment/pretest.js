 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");
         answerContainers.forEach(e => e.style.color = "black");
         
         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. By which of the following wave speed is represented in one-dimensional wave equation?", ///// Write the question inside double quotes
            answers: {
                a: "x", ///// Write the option 1 inside double quotes
                b: "t", ///// Write the option 2 inside double quotes
                c: "p", ///// Write the option 1 inside double quotes
                d: "c", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "2. What is the valve of wave speed "c"?", ///// Write the question inside double quotes
            answers: {
                a: "&nbsp;c = &#8730;A/&#961;T", ///// Write the option 1 inside double quotes
                b: "&nbsp;c = &#8730;T/&#961;A", ///// Write the option 2 inside double quotes
                c: "&nbsp;c = &#8730;t/&#961;A", ///// Write the option 1 inside double quotes
                d: "&nbsp;c = &#8730;&#961;/TA", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. The motion of the string can be represented by which of the following?", ///// Write the question inside double quotes
            answers: {
                a: "&nbsp;w(x,t)=S sin (k&#960;cl/t) sin (k&#960;x/l)", ///// Write the option 1 inside double quotes
                b: "&nbsp;w(x,t)=S sin (k&#960;ct/l) sin (k&#960;l/x)", ///// Write the option 2 inside double quotes
                c: "&nbsp;w(x,t)=S sin (k&#960;ct/l) sin (k&#960;x/x)", ///// Write the option 1 inside double quotes
                d: "&nbsp;w(x,t)=S sin (kctl/&#960;) sin (k&#960;x/l)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "4. What happen to the tension when n(x,t) &#8801; 0?", ///// Write the question inside double quotes
            answers: {
                a: "&nbsp;The tension T (x,t) is change.", ///// Write the option 1 inside double quotes
                b: "&nbsp;The tension T (x,t) is a constant.", ///// Write the option 2 inside double quotes
                c: "&nbsp;There is no change in tension T (x,t).", ///// Write the option 1 inside double quotes
                d: "&nbsp;The tension T (x,t) = 0.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Which of the following is a linear one-dimensional wave equation?", ///// Write the question inside double quotes
            answers: {
                a: "&nbsp;w<sub>,t</sub>&#8722; c<sup>2</sup> w<sub>,x</sub>=0", ///// Write the option 1 inside double quotes
                b: "&nbsp;w<sub>tt</sub>&#8722; c<sup>2</sup> w<sub>xx</sub>=0", ///// Write the option 2 inside double quotes
                c: "&nbsp;w<sub>,tt</sub>&#8722; c<sup>2</sup> w<sub>,xx</sub>=0", ///// Write the option 1 inside double quotes
                d: "&nbsp;w<sub>,tt</sub>&#8722; cw<sub>,xx</sub>=0", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
