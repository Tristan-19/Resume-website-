document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit-quiz");
    const resultContainer = document.getElementById("quiz-result");

    const questions = [
        {
            question: "How many places have I lived?",
            options: ["5", "10", "1", "7"],
            answer: "5"
        },
        {
            question: "Which sport do I play?",
            options: ["Baseball", "Football", "Ice Hockey", "Table Tennis"],
            answer: "Ice Hockey"
        },
        {
            question: "What ice hockey team do I play for?",
            options: ["Eisbären Berlin", "EC Bad Tolz", "SC Riessersee", "EHC Munchen"],
            answer: "SC Riessersee"
        },
        {
            question: "What school do I go to?",
            options: ["Munich International School", "British International School Istanbul", "American International School in Cyprus", "Rome International School"],
            answer: "Munich International School"
        },
        {
            question: "What state was I born in?",
            options: ["New York", "California", "Kansas", "Florida"],
            answer: "New York"
        }
    ];

    function displayQuiz() {
        let quizHTML = "";
        questions.forEach((q, index) => {
            quizHTML += `<div class="question">
                <p>${q.question}</p>
                ${q.options.map(option =>
                    `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label>`
                ).join("<br>")}
            </div><br>`;
        });
        quizContainer.innerHTML = quizHTML;
    }

    function checkAnswers() {
        let score = 0;
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });

        resultContainer.innerHTML = `You got ${score} out of ${questions.length} correct!`;

        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    }

    submitButton.addEventListener("click", checkAnswers);
    displayQuiz();
});
