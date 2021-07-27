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
            question: "1. By choosing how many cases we can perform this experiment?", ///// Write the question inside double quotes
            answers: {
                a: "3", ///// Write the option 1 inside double quotes
                b: "4", ///// Write the option 2 inside double quotes
                c: "5", ///// Write the option 1 inside double quotes
                d: "6", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. How many times the diameter increase when string change from light to heavy?", ///// Write the question inside double quotes
            answers: {
                a: "5", ///// Write the option 1 inside double quotes
                b: "4", ///// Write the option 2 inside double quotes
                c: "7", ///// Write the option 1 inside double quotes
                d: "3", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. An experiment is preformed according to time "t", what are the values of "t"?", ///// Write the question inside double quotes
            answers: {
                a: "t = 0, 5, 8", ///// Write the option 1 inside double quotes
                b: "t = 0, 6, 7", ///// Write the option 2 inside double quotes
                c: "t = 0.5, 1, 2", ///// Write the option 1 inside double quotes
                d: "t = 7, 8, 9", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "4. When the experiment is performed, is there any change in length takes place?", ///// Write the question inside double quotes
            answers: {
                a: "Yes", ///// Write the option 1 inside double quotes
                b: "No", ///// Write the option 2 inside double quotes
                c: "can't say", ///// Write the option 1 inside double quotes
                d: "may be", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "5. How the wave travels in case of zero mass string on right side.", ///// Write the question inside double quotes
            answers: {
                a: "The wave reflects back but in reverse direction.", ///// Write the option 1 inside double quotes
                b: "The wave reflects back in same direction.", ///// Write the option 2 inside double quotes
                c: "Some part of wave is reflects back in same direction and some part is transmitted.", ///// Write the option 1 inside double quotes
                d: "None of the above.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
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
