const quizForm = document.querySelector(".quiz-form")
const submitAnswerBtn = document.querySelector("#submit-answer-button")
const message = document.querySelector("#message")
const correctAnswers = ["90°", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // debugger;
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
           // message.innerText = `Correct, your score is ${score}`;
        }
        index = index + 1;
    }
    console.log(score);
    message.innerText = `Your score is ${score}`;
}

submitAnswerBtn.addEventListener("click", calculateScore)