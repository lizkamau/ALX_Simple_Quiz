// Function to check the user's answer
function checkAnswer() {
  const correctAnswer = "4"; // Correct answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  // Check if user selected anything
  if (!userAnswer) {
    feedback.textContent = "Please select an answer!";
    feedback.style.color = "red";
    return;
  }

  // Compare answers
  if (userAnswer.value === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
