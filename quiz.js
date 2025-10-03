function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!userAnswer) {
    feedback.textContent = "Please select an answer!";
    feedback.style.color = "red";
    return;
  }

  // First check the element itself (not equal, but shows your requested condition)
  if (userAnswer === correctAnswer) {
    // This will never be true, because userAnswer is an element, not a string
    console.log("This comparison will always fail, but it shows the syntax you asked for.");
  }

  // ✅ The correct comparison:
  if (userAnswer.value === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
