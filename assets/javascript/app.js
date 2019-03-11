
var timeLeft = 30;
// click function for start to begin timer
$("#start-button").on("click", function () {

    timeLeft = 30;
    var elem = document.getElementById("time-count");
    var timerId = setInterval(countdown, 1000);
    $("input:checkbox").prop('checked', false);

    // timer function
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            displayResults(checkResults());
            reset()
        } else {
            elem.innerHTML = timeLeft + ' seconds';
            timeLeft--;
        }
    }
});

// reset function for when timer runs out
var reset = function () {
    $("#time-count").empty();
}
// function to gather checked results and return correct or incorrect
var checkResults = function () {
    var answers = $("input:checked");
    console.log(answers);
    var results = [];

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
var displayResults = (results) => {

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

