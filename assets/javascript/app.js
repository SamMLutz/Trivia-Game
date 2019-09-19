let timeLeft = 30;

const elem = document.getElementById("time-count");

  // timer function
//   const countDown2 = timer => {
//     if (timeLeft == -1) {
//         clearTimeout(timer);
//         displayResults(checkResults());
//         reset()
//     } else {
//         elem.innerHTML = timeLeft + ' seconds';
//         timeLeft -= 1;
//         console.log("timeLeft: ", timeLeft);
//     }
// }
 


// click function for start to begin timer
$("#start-button").on("click", () => {
const timerId = setInterval(countdown, 1000);

 
   
    // show main container content on click
    // $(".time-remaining").show();
    $(".question1").show();
    // $(".main-container").show();
   
    $("input:checkbox").prop('checked', false);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            displayResults(checkResults());
            reset()
        } else {
            elem.innerHTML = timeLeft + ' seconds';
            timeLeft -= 1;
            if (timeLeft === 25) {
                $(".question2").show();
            }
            else if (timeLeft === 20) {
                $(".question3").show();
            }
            console.log("timeLeft: ", timeLeft);
        }
    }






// reset function for when timer runs out
const reset = () => $("#time-count").empty();

// function to gather checked results and return correct or incorrect
const checkResults = () => {
    const answers = $("input:checked");
    console.log(answers);
    const results = [];

    // loop answers and check answer.value
    $.each(answers, (index, answer) => {
        if (answer.hasAttribute('data-correct-answer')) {
            results.push("correctly");
        }
        else {
            results.push("incorrectly");
        }
    })
    return results;
}

//  function to display results to the user
const displayResults = (results) => {
    alert("you answered question 1 " + results[0]);
    alert("you answered question 2 " + results[1]);
    alert("you answered question 3 " + results[2]);
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
    displayResults(checkResults());
});

});
