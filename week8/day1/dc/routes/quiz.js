const express = require('express')
const router = express.Router()

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/quiz', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({ question: triviaQuestions[currentQuestionIndex].question })
});

router.post('/quiz', (req, res) => {
  const userAnswer = req.body.answer;

  if (userAnswer.toLowerCase() === triviaQuestions[currentQuestionIndex].answer.toLowerCase()) {
    score++;
    res.json({ correct: true, message: 'Correct!', score })
  } else {
    res.json({ correct: false, message: `Incorrect! The correct answer was ${triviaQuestions[currentQuestionIndex].answer}.`, score })
  }

  currentQuestionIndex++

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question, score })
  } else {
    res.json({ message: 'Quiz completed! Go to /quiz/score to see your final score.', score })
  }
})

router.get('/quiz/score', (req, res) => {
  res.json({ finalScore: score, message: `You scored ${score} out of ${triviaQuestions.length}` })
})

module.exports = router;
