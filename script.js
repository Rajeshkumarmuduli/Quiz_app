const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";

    currentQuizData.choices.forEach((choice) => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quizChoice";
        radio.value = choice;
        choicesElement.appendChild(radio);

        const label = document.createElement("label");
        label.innerText = choice;
        choicesElement.appendChild(label);
        choicesElement.appendChild(document.createElement("br"));
    });
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quizChoice"]:checked');

    if (userAnswer) {
        if (userAnswer.value === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }
}

function showScore() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    submitBtn.style.display = "none";
    scoreElement.innerText = `You scored ${score} out of ${quizData.length} questions!`;
}

loadQuestion();
submitBtn.addEventListener("click", checkAnswer);
