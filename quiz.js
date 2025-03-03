const quizData = [
    {
        question: "How many places have I lived?",
        options: ["5", "10", "1", "7"],
        correct: "5"
    },
    {
        question: "Which sport do I play?",
        options: ["Baseball", "Football", "Ice Hockey", "Table Tennis"],
        correct: "Ice Hockey"
    },
    {
        question: "Where am I currently living?",
        options: ["USA", "UK", "Germany", "Canada"],
        correct: "Germany"
    },
    {
        question: "Which of these is one of my hobbies?",
        options: ["Painting", "Coding", "Dancing", "Fishing"],
        correct: "Coding"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, q.correct);
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function checkAnswer(answer, correct) {
    if (answer === correct) {
        resultEl.innerText = "✅ Correct!";
        resultEl.style.color = "green";
        score++;
    } else {
        resultEl.innerText = `❌ Incorrect! The correct answer is ${correct}.`;
        resultEl.style.color = "red";
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    resultEl.innerText = "";

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionEl.innerText = `Quiz Complete!`;
    optionsEl.innerHTML = `You got ${score} out of ${quizData.length} correct.`;

    setTimeout(() => {
        window.location.href = "index.html"; // Redirects back to the home page
    }, 3000); // Redirect after 3 seconds
}

// Load the first question when the page loads
loadQuestion();

