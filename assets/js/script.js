// Globals.
var timeEl = $("#time");
var btnStart = $("#start");
var questionEl = $("#question");
var answerEl = $("#answers");

var intIndex = 0;
var isRunning = false;

var iCorrect = 0;
var iIncorrect = 0;
var objScore = {
    correct: 0,
    initials: ""
};

// Questions.
var questions = [
    "What is the only even prime number?",
    "When you divide a chart into four sections, what are those sections called?",
    "This calculus operation uses an infinite sum to find the area under a curve.",
    "What is the mnemonic to aid in remembering the trigonometric functions?",
    "The Cartesian coordinate system is named after which French mathematician?",
    "Using the standard order of operations, what is the last operation you perform on an equation?",
    "What is the measure of a right angle in degrees?",
    "10 followed by 100 zeros is called what?",
    "Which field of math is named for a mispronunciation of an Arabic phrase meaning 'reunion of broken parts'?",
    "What broad category can be subdivided into studies of groups, rings, and fields?"
];

// Answer options.
var answers = [
    ["0", "2", "4"],
    ["sections", "quarters", "quadrants"],
    ["integral", "limit", "addend"],
    ["Sohcahtoa", "Sesquahanna", "Sakajawea"],
    ["Descartes", "Voltaire", "Foucault"],
    ["exponents", "multiplication", "subtraction"],
    ["30°", "45°", "90°"],
    ["googol", "zillion", "septazillion"],
    ["Calculus", "Algebra", "Miltivariate"],
    ["String Theory", "Set Theory", "Algebra"]
];

// Answer key (index in 'answers' array of the correct answer).
var keys = [1, 2, 0, 0, 0, 2, 2, 0, 1, 2]


// Start the game!
function start() {
    // Start timer.
    if (isRunning) {
        return;
    } else {
        timeEl.show();
        isRunning = true;
        displayQuestion();
        timeLeft = 30;
        timeEl.text("Time: " + timeLeft + "s");
        countdownTimer = setInterval(function () {
            timeLeft--;
            timeEl.text("Time: " + timeLeft + "s");
            if (timeLeft <= 0) {
                isRunning = false;
                clearInterval(countdownTimer);
                btnStart.text('START');
                timeLeft = 30
                timeEl.text("Time: " + timeLeft + "s");
                questionEl.text("");
                answerLiEl = $("li");
                if (answerLiEl) {
                    $.each(answerLiEl, function (i, answerLiEl) {
                        answerLiEl.remove();
                    })
                }
            }
        }, 1000)
    }
}


// Display a single question, and three answer option buttons.
function displayQuestion() {
    answerLiEl = $("li");
    if (answerLiEl) {
        $.each(answerLiEl, function (i, answerLiEl) {
            answerLiEl.remove();
        })
    }
    intIndex = Math.floor(Math.random() * questions.length);
    questionEl.text(questions[intIndex]);
    for (var i = 0; i < answers[intIndex].length; i++) {
        var newLiEl = $("<li>")
        var btnAnswer = $("<button>");
        btnAnswer.addClass("answer-button");
        btnAnswer.attr("data-key", i);
        btnAnswer.text(answers[intIndex][i]);
        newLiEl.append(btnAnswer);
        answerEl.append(newLiEl);
    }
}


// TODO: monitor for start button click.
btnStart.on("click", start);


// TODO: check for correct answer with a delegated event listener.
answerEl.on('click', '.answer-button', function (event) {
    // Get the index to the answer from the button's data-key attribute.
    var btnIndex = $(event.target).attr('data-key')
    if (keys[intIndex] == btnIndex) {
        iCorrect += 1;
        displayQuestion();
    } else {
        iIncorrect += 1;
        displayQuestion();
    }
});