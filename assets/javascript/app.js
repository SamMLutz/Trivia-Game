let timeLeft = 30;
const elem = document.getElementById("time-count");

// click function for start to begin timer
$("#start-button").on("click", () => {
    const timerId = setInterval(countdown, 1000);
    $("input:checkbox").prop('checked', false);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            displayResults(checkResults());
            reset()
        } else {
            $(".time-remaining").show();
            $(".question1").show();
            elem.innerHTML = timeLeft + ' seconds';
            timeLeft -= 1;
            if (timeLeft === 25) {
                $(".question2").show();
            }
            else if (timeLeft === 20) {
                $(".question3").show();
                $(".finish").show();
            }
            console.log("timeLeft: ", timeLeft);
        }
    }

    // reset function for when timer runs out
    const reset = () => $("#time-count").empty();

    // function to gather checked results and return correct or incorrect
    const checkResults = () => {
        const answers = $("input:checked");
        console.log(answers[0].value);

        const results = [];

        // loop answers and check answer.value
        $.each(answers, (index, answer) => {
            if (answer.hasAttribute('data-correct-answer')) {
                results.push("correctly");
                // console.log("answers: ", JSON.stringify(answers))
                console.log("correct answer: ", answer.value)

            }
            else {
                results.push("incorrectly");
                // chosenAnswers.push(answer.value)
            }
        })
        return results;
    }

    //  function to display results to the user
    const displayResults = (results, answers) => {
        // console.log(("results[0]: ", results[0]))
        alert("you answered question 1 " + results[0]);
        alert("you answered question 2 " + results[1]);
        alert("you answered question 3 " + results[2]);

        if (results[0].includes("incorrectly")) {
            alert("try again to obtain the perfect score!")
        }
        else {
            alert("You answered every question correctly for a perfect score! Great job!")
        }
        location.reload()
    }

    //  click functions to only allow one check for set of answers
    $('.answers1').click(function () {
        $('.answers1').not(this).prop('checked', false);
    });

    $('.answers2').click(function () {
        $('.answers2').not(this).prop('checked', false);
    });

    $('.answers3').click(function () {
        $('.answers3').not(this).prop('checked', false);
    });

    // click function for the finish button
    $('.finish').click(function () {
        timeLeft = 0;
        countdown() = false;
    });

});
