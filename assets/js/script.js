// Globals.
var timeEl = $("#time");
var btnStart = $("#start");
var questionEl = $("#question");
var intIndex = 0;
var isRunning = false;


var questions = ["What is the only even prime number?",
    "When you divide a chart into four sections, what are those sections called?",
    "This calculus operation uses an infinite sum to find the area under a curve.",
    "What is the mnemonic to aid in remembering the trigonometric functions?",
    "The Cartesian coordinate system is named after which French mathematician?",
    "Using the standard order of operations, what is the last operation you perform on an equation?",
    "What is the measure of a right angle in degrees?",
    "10 followed by 100 zeros is called what?",
    "Which field of math is named for a mispronunciation of an Arabic phrase meaning 'reunion of broken parts'?",
    "What broad category can be subdivided into studies of groups, rings, and fields?"]

var answers = [["0", "2", "4"],
["sections", "quarters", "quadrants"],
["integral", "limit", "addend"],
["Sohcahtoa", "Sesquahanna", "Sakajawea"],
["Descartes", "Voltaire", "Foucault"],
["exponents,", "multiplication", "subtraction"],
["30'", "45'", "90'"],
["googol", "zillion", "septazillion"],
["x", "Algebra", ""],
["", "", "Algebra"]]

var keys = [1, 2, 0, 0, 0, 2, 2, 0, 1, 2]


function init() {
    // timeEl.hide();
    // questionEl.hide();
}


// Start the game
function start() {
    // Start timer.
    if (isRunning) {
        return;
    } else {
        btnStart.text("STOP");
        timeEl.show();
        isRunning = true;
        displayQuestion();
        timeLeft = 30;
        timeEl.text(timeLeft);
        countdownTimer = setInterval(function () {
            timeLeft--;
            timeEl.text(timeLeft);
            if (timeLeft <= 0) {
                isRunning = false;
                clearInterval(countdownTimer);
                btnStart.text('START');
                timeLeft = 60
                timeEl.text(timeLeft);
            }
        }, 1000)
    }
}


// TODO: display question.
function displayQuestion() {
    intIndex = Math.floor(Math.random() * questions.length);
    questionEl.text(questions[intIndex]);
}


// TODO: monitor for start button click.
btnStart.on("click", start);


// TODO: check for correct answer.
init();