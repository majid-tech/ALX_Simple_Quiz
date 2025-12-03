
function checkAnswer() {
    const correctAnswer = "4"

    userAnswer = document.querySelector('input[name="quiz"]:checked').value

    const feedback = document.getElementById("feedback")

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
    } else {
        feedback.textContent = "That's incorrect. Try again!"
    }
}

const submitAnswerbtn = document.getElementById("submit-answer")

submitAnswerbtn.addEventListener("click", checkAnswer)
