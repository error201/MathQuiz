// Globals.
var timeEl = document.querySelector("#time");
var btnStart = document.querySelector("#start");
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector("#question")
var btnOne = document.querySelector("#btn1");
var btnTwo = document.querySelector("#btn2");
var btnThree = document.querySelector("#btn3");
var isRunning = false;


var questions = ["What is the only even prime number?", "When you divide a chart into four sections, what are those sections called?",
                "This calculus operation uses an infinite sum to find the area under a curve.","What is the mnemonic to aid in remembering the trigonometric functions?"]
var answers = [["0", "2", "4"],["sections" ,"quarters", "quadrants"],["integral", "limit", "addend"], ["Sohcahtoa", "Sesquahanna", "Sakajawea"]]


// TODO: start the game
function start() {
    // Start timer.
    if (isRunning){
        return;
    }
    isRunning = true;
    displayQuestion();
    timeLeft = 60;
    timeEl.textcontext = timeLeft;
    countdownTimer = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(countdownTimer);
            isRunning = false;
        }
    } ,1000)
}


// TODO: display question.
function displayQuestion(){
    myIndex = Math.ceil(Math.random()*questions.length);
    questionEl.textContent = questions[myIndex];
    btnOne.textContent = answers[myIndex][0];
    btnTwo.textContent = answers[myIndex][1];
    btnThree.textContent = answers[myIndex][2];
}


// TODO: monitor for start button click.
btnStart.addEventListener("click", start);


// TODO: check for correct answer.

